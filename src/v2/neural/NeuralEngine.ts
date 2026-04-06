import { NeuralNode, NeuralEdge, NeuralPulse, NeuralEngineAPI, NeuralState } from './neural-types';

export class NeuralEngine implements NeuralEngineAPI {
  private nodes: NeuralNode[] = [];
  private edges: NeuralEdge[] = [];
  private pulses: NeuralPulse[] = [];
  private listeners: Set<(state: NeuralState) => void> = new Set();
  
  private width: number;
  private height: number;
  private density: number = 40; // Pixels between nodes

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.initialize();
  }

  private initialize() {
    this.nodes = [];
    this.edges = [];
    this.pulses = [];

    const cols = Math.ceil(this.width / this.density) + 1;
    const rows = Math.ceil(this.height / this.density) + 1;

    // Create Nodes
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const id = r * cols + c;
        const x = c * this.density + (Math.random() - 0.5) * 15;
        const y = r * this.density + (Math.random() - 0.5) * 15;
        
        this.nodes.push({
          id,
          position: [x, y, 0],
          velocity: [0, 0, 0],
          energy: 0
        });
      }
    }

    // Create Edges (Grid Topology)
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        // Right neighbor
        if (c < cols - 1) {
          this.edges.push({ from: i, to: i + 1, weight: 0.8 + Math.random() * 0.2 });
        }
        // Bottom neighbor
        if (r < rows - 1) {
          this.edges.push({ from: i, to: i + cols, weight: 0.8 + Math.random() * 0.2 });
        }
      }
    }
  }

  public update(delta: number) {
    // 1. Decay Existing Energy
    this.nodes.forEach(node => {
      node.energy *= 0.92; // Natural dissipation
      if (node.energy < 0.001) node.energy = 0;
    });

    // 2. Process Pulses & Propagation
    const nextPulses: NeuralPulse[] = [];
    
    for (const pulse of this.pulses) {
      const node = this.nodes[pulse.nodeId];
      if (!node) continue;

      // Transfer energy to node
      node.energy += pulse.strength;

      // Propagate if pulse has life
      if (pulse.life > 0) {
        const connections = this.edges.filter(e => e.from === pulse.nodeId || e.to === pulse.nodeId);
        for (const edge of connections) {
          const targetId = edge.from === pulse.nodeId ? edge.to : edge.from;
          nextPulses.push({
            nodeId: targetId,
            strength: pulse.strength * edge.weight * 0.6,
            life: pulse.life - 1
          });
        }
      }
    }

    this.pulses = nextPulses;

    // 3. Performance Cleanup (Limit active pulses)
    if (this.pulses.length > 500) {
      this.pulses = this.pulses.sort((a, b) => b.strength - a.strength).slice(0, 500);
    }

    this.notify();
  }

  public emitPulse(x: number, y: number, intensity: number = 1.0) {
    // Find closest node to origin
    let closestId = -1;
    let minDist = Infinity;

    this.nodes.forEach(node => {
      const dx = node.position[0] - x;
      const dy = node.position[1] - y;
      const d = dx * dx + dy * dy;
      if (d < minDist) {
        minDist = d;
        closestId = node.id;
      }
    });

    if (closestId !== -1 && minDist < 40000) { // dentro de 200px aprox
      this.pulses.push({
        nodeId: closestId,
        strength: intensity,
        life: 5 // Propagation depth
      });
    }
  }

  public getState(): NeuralState {
    return {
      nodes: this.nodes,
      edges: this.edges,
      pulses: this.pulses,
      totalEnergy: this.nodes.reduce((sum, n) => sum + n.energy, 0)
    };
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach(fn => fn(state));
  }

  public subscribe(fn: (state: NeuralState) => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.initialize();
  }

  public destroy() {
    this.listeners.clear();
    this.nodes = [];
    this.edges = [];
    this.pulses = [];
  }
}

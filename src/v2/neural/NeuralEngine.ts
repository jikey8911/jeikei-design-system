import { NeuralEngineAPI, NeuralNode, NeuralEdge, Point } from './neural-types';

export class NeuralEngine implements NeuralEngineAPI {
  private nodes: NeuralNode[] = [];
  private edges: NeuralEdge[] = [];
  private listeners: Set<(state: any) => void> = new Set();
  private width: number = 0;
  private height: number = 0;
  private spacing: number = 60;
  private pulses: { node: number; at: number; intensity: number }[] = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.seed();
  }

  private seed() {
    const cols = Math.max(6, Math.floor(this.width / this.spacing));
    const rows = Math.max(4, Math.floor(this.height / this.spacing));
    
    this.nodes = [];
    this.edges = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        this.nodes.push({
          position: [
            (x + 0.5) * this.spacing + (Math.random() - 0.5) * 10,
            (y + 0.5) * this.spacing + (Math.random() - 0.5) * 10,
            0
          ],
          velocity: [0, 0, 0],
          energy: Math.random() * 0.2
        });
      }
    }

    const index = (x: number, y: number) => y * cols + x;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = index(x, y);
        if (x < cols - 1) this.addEdge(i, index(x + 1, y));
        if (y < rows - 1) this.addEdge(i, index(x, y + 1));
      }
    }
  }

  private addEdge(a: number, b: number) {
    this.edges.push({ a, b, intensity: 0.1 });
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.seed();
  }

  public emitPulse(x: number, y: number, intensity: number = 1.0) {
    const maxRadius = this.spacing * 8;
    const now = performance.now();
    const waveSpeed = 0.35;

    this.nodes.forEach((node, idx) => {
      const dx = node.position[0] - x;
      const dy = node.position[1] - y;
      const dist = Math.hypot(dx, dy);

      if (dist < maxRadius) {
        const delay = dist * waveSpeed;
        const waveIntensity = intensity * (1 - (dist / maxRadius) * 0.6);
        this.pulses.push({ node: idx, at: now + delay, intensity: waveIntensity });
      }
    });
  }

  public update(delta: number) {
    const now = performance.now();

    // Process pulses
    this.pulses = this.pulses.filter(p => {
      if (now >= p.at) {
        this.nodes[p.node].energy = Math.min(1.2, this.nodes[p.node].energy + p.intensity);
        return false;
      }
      return true;
    });

    // Physics & Decay
    this.nodes.forEach(node => {
      node.position[0] += node.velocity[0] * delta;
      node.position[1] += node.velocity[1] * delta;
      node.velocity[0] *= 0.95;
      node.velocity[1] *= 0.95;
      node.energy = Math.max(0, node.energy - delta * 0.12);
    });

    // Edge intensity
    this.edges.forEach(edge => {
      edge.intensity = (this.nodes[edge.a].energy + this.nodes[edge.b].energy) * 0.5;
    });

    this.notify();
  }

  private notify() {
    this.listeners.forEach(fn => fn({ nodes: this.nodes, edges: this.edges }));
  }

  public subscribe(fn: (state: any) => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  public destroy() {
    this.listeners.clear();
    this.pulses = [];
  }
}

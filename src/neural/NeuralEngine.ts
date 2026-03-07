export interface Node {
  id: number;
  x: number;
  y: number;
}

export interface Pulse {
  from: Node;
  to: Node;
  progress: number;
  speed: number;
}

export class NeuralEngine {
  nodes: Node[] = [];
  pulses: Pulse[] = [];
  gridSize: number;

  constructor(width: number, height: number, gridSize: number = 80) {
    this.gridSize = gridSize;
    this.init(width, height);
  }

  init(width: number, height: number) {
    this.nodes = [];
    for (let x = 0; x <= width; x += this.gridSize) {
      for (let y = 0; y <= height; y += this.gridSize) {
        this.nodes.push({
          id: this.nodes.length,
          x,
          y,
        });
      }
    }
  }

  createPulse() {
    if (this.nodes.length < 2) return;
    const startNode = this.nodes[Math.floor(Math.random() * this.nodes.length)];

    // Find a neighbor node (simple horizontal or vertical)
    const neighbors = this.nodes.filter(n =>
      n.id !== startNode.id &&
      ((Math.abs(n.x - startNode.x) === this.gridSize && n.y === startNode.y) ||
       (Math.abs(n.y - startNode.y) === this.gridSize && n.x === startNode.x))
    );

    if (neighbors.length > 0) {
      const endNode = neighbors[Math.floor(Math.random() * neighbors.length)];
      this.pulses.push({
        from: startNode,
        to: endNode,
        progress: 0,
        speed: 0.01 + Math.random() * 0.02,
      });
    }
  }

  update() {
    this.pulses.forEach(p => {
      p.progress += p.speed;
    });
    this.pulses = this.pulses.filter(p => p.progress < 1);
  }
}

export interface Point {
  x: number;
  y: number;
  z?: number;
}

export interface NeuralNode {
  position: [number, number, number];
  velocity: [number, number, number];
  energy: number;
}

export interface NeuralEdge {
  a: number;
  b: number;
  intensity: number;
}

export interface NeuralEngineAPI {
  update(delta: number): void;
  emitPulse(x: number, y: number, intensity?: number): void;
  subscribe(fn: (state: { nodes: NeuralNode[]; edges: NeuralEdge[] }) => void): () => void;
  destroy(): void;
  resize(width: number, height: number): void;
}

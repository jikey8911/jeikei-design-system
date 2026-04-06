export interface Point {
  x: number;
  y: number;
  z?: number;
}

export interface NeuralNode {
  id: number;
  position: [number, number, number];
  velocity: [number, number, number];
  energy: number;
}

export interface NeuralEdge {
  from: number;
  to: number;
  weight: number;
}

export interface NeuralPulse {
  nodeId: number;
  strength: number;
  life: number;
}

export interface NeuralState {
  nodes: NeuralNode[];
  edges: NeuralEdge[];
  pulses: NeuralPulse[];
  totalEnergy: number;
}

export interface NeuralEngineAPI {
  update(delta: number): void;
  emitPulse(x: number, y: number, intensity?: number): void;
  subscribe(fn: (state: NeuralState) => void): () => void;
  destroy(): void;
  resize(width: number, height: number): void;
  getState(): NeuralState;
}

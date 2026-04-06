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
  originId?: number; // Previous node to prevent immediate back-propagation
  strength: number;
  life: number;
}

export interface NeuralState {
  nodes: NeuralNode[];
  edges: NeuralEdge[];
  pulses: NeuralPulse[];
  activeEdges: Set<string>; // "from-to" IDs of edges currently carrying energy
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

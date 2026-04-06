export interface NeuralPresetConfig {
  nodeDensity: number;
  glowIntensity: number;
  pulseSpeed: number;
  interactionStrength: number;
  spacing: number;
}

export interface PulsePoint {
  x: number;
  y: number;
}

export class NeuralEngine3D {
  constructor(opts: { width: number; height: number; preset?: string });
  size: { width: number; height: number };
  preset: NeuralPresetConfig;
  nodes: number[][];
  energies: number[];
  edges: number[][];
  lineEnergy: number[];
  resize(width: number, height: number): void;
  update(dt: number): void;
  triggerPulse(point: PulsePoint, intensity?: number): void;
  microPulse(point: PulsePoint): void;
  attract(point: PulsePoint, strength?: number): void;
}

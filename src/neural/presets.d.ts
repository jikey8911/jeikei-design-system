export interface NeuralPreset {
  nodeDensity: number;
  glowIntensity: number;
  pulseSpeed: number;
  interactionStrength: number;
  spacing: number;
}
export const neuralPresets: Record<string, NeuralPreset>;
export const getPreset: (name?: string) => NeuralPreset;

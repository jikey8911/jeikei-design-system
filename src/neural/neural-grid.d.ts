export interface NeuralGridProps {
  preset?: 'dashboard' | 'mission-control' | 'jarvis';
  followMouse?: boolean;
  reactToTyping?: boolean;
  reactToClick?: boolean;
  className?: string;
}

export const NeuralGrid: React.FC<NeuralGridProps>;
export const useNeuralGrid: (opts?: NeuralGridProps) => NeuralGridProps;
export const neuralPresets: Record<string, {
  nodeDensity: number;
  glowIntensity: number;
  pulseSpeed: number;
  interactionStrength: number;
  spacing: number;
}>;

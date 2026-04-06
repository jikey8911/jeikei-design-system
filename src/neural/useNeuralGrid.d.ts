import { NeuralPreset } from './presets';

export interface UseNeuralGridProps {
  preset?: 'dashboard' | 'mission-control' | 'jarvis';
  followMouse?: boolean;
  reactToTyping?: boolean;
  reactToClick?: boolean;
  className?: string;
}

export const useNeuralGrid: (opts?: UseNeuralGridProps) => UseNeuralGridProps & { config: NeuralPreset };

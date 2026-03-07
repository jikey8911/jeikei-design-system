import { useEffect, useState } from 'react';

export interface NeuralNetworkState {
  isActive: boolean;
  intensity: number;
}

export const useNeuralNetwork = (initialIntensity: number = 1) => {
  const [state, setState] = useState<NeuralNetworkState>({
    isActive: true,
    intensity: initialIntensity,
  });

  useEffect(() => {
    const handleKeyDown = () => {
      setState(prev => ({ ...prev, intensity: Math.min(prev.intensity + 0.1, 2) }));
      setTimeout(() => {
        setState(prev => ({ ...prev, intensity: Math.max(prev.intensity - 0.1, 0.5) }));
      }, 500);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return state;
};

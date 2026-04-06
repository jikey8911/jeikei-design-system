import { useMemo } from 'react';
import { getPreset } from './presets';

export const useNeuralGrid = ({ preset = 'mission-control', followMouse = true, reactToTyping = true, reactToClick = true } = {}) =>
  useMemo(
    () => ({
      preset,
      followMouse,
      reactToTyping,
      reactToClick,
      config: getPreset(preset),
    }),
    [preset, followMouse, reactToTyping, reactToClick]
  );


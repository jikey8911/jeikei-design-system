export const neuralPresets = {
  dashboard: {
    nodeDensity: 0.55,
    glowIntensity: 1.0,
    pulseSpeed: 1.0,
    interactionStrength: 0.6,
    spacing: 90,
  },
  'mission-control': {
    nodeDensity: 0.65,
    glowIntensity: 1.25,
    pulseSpeed: 1.2,
    interactionStrength: 0.8,
    spacing: 80,
  },
  jarvis: {
    nodeDensity: 0.75,
    glowIntensity: 1.4,
    pulseSpeed: 1.5,
    interactionStrength: 1.0,
    spacing: 70,
  },
};

export const getPreset = (name = 'mission-control') => neuralPresets[name] ?? neuralPresets['mission-control'];

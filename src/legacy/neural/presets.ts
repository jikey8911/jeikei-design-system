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
    nodeDensity: 0.8,
    glowIntensity: 1.6,
    pulseSpeed: 1.6,
    interactionStrength: 1.1,
    spacing: 68,
  },
  nebula: {
    nodeDensity: 0.95,
    glowIntensity: 2.2,
    pulseSpeed: 1.8,
    interactionStrength: 1.2,
    spacing: 55,
  },
};

export const getPreset = (name = 'nebula') => (neuralPresets as any)[name] ?? neuralPresets['nebula'];


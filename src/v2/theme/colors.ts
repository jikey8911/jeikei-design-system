export const colors = {
  mission: {
    accent: '#f2b93b',
    accentStrong: '#ffffff',
    bg: '#05070a',
    surface: '#0b0f15',
    magenta: '#ff00ff',
    cyan: '#00ffff',
    muted: '#4a5b7c',
    glow: 'rgba(242, 185, 59, 0.45)',
  },
  nebula: {
    accent: '#34d8ff',
    accentStrong: '#ffffff',
    bg: '#02040a',
    surface: '#0b0f14',
    magenta: '#ff2bd6',
    cyan: '#34d8ff',
    muted: '#4a5b7c',
    glow: 'rgba(52, 216, 255, 0.35)',
  }
};

export const getColorVars = (mode: 'mission' | 'nebula') => {
  const c = colors[mode];
  return {
    '--neo-accent': c.accent,
    '--neo-accent-strong': c.accentStrong,
    '--neo-bg': c.bg,
    '--neo-surface': c.surface,
    '--neo-magenta': c.magenta,
    '--neo-cyan': c.cyan,
    '--neo-muted': c.muted,
    '--neo-glow': c.glow,
  } as React.CSSProperties;
};

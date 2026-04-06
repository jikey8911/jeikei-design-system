import { useMemo } from 'react';

type GlowOptions = { strong?: boolean; pulse?: boolean };

export const useGlow = (options: GlowOptions = {}) => {
  const { strong, pulse } = options;
  return useMemo(
    () => ({
      glowClass: `${strong ? 'shadow-glow-strong' : 'shadow-glow'} ${pulse ? 'animate-pulse-glow' : ''}`.trim(),
    }),
    [strong, pulse]
  );
};

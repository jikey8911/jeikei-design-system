import { useEffect } from 'react';

type Options = {
  keys?: string[];
  onPulse?: (key: string) => void;
};

export const useKeyboardPulse = ({ keys, onPulse }: Options = {}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (keys && !keys.includes(e.key)) return;
      onPulse?.(e.key);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [keys, onPulse]);
};

import { useEffect } from 'react';

export const useNeuralSystem = (enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;
    document.body.style.backgroundColor = "#05070a";
    document.body.style.color = "#ffffff";
    document.body.classList.add('neural-system-active');

    return () => {
      document.body.classList.remove('neural-system-active');
    };
  }, [enabled]);
};

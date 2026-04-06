import { useEffect, useMemo, useRef, useState } from 'react';
import { NeuralEngine, NeuralEngineOptions, NeuralStateSnapshot } from '../neural/NeuralEngine';

export const useNeuralSystem = (options: NeuralEngineOptions = {}) => {
  const engineRef = useRef<NeuralEngine | null>(null);
  const [snapshot, setSnapshot] = useState<NeuralStateSnapshot | null>(null);

  useEffect(() => {
    engineRef.current = new NeuralEngine(options);
    const engine = engineRef.current;
    const unsub = engine.subscribe(setSnapshot);
    engine.start();
    return () => {
      unsub();
      engine.stop();
    };
  }, [options.density, options.speed, options.interactive, options.decay]);

  const api = useMemo(
    () => ({
      addPulse: (point: { x: number; y: number }) => engineRef.current?.pulse(point),
      disperse: () => engineRef.current?.disperse(),
      setInteractive: (v: boolean) => engineRef.current?.setInteractive(v),
      snapshot,
    }),
    [snapshot]
  );

  return api;
};

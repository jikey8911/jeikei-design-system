import { NeuralEngineOptions, NeuralStateSnapshot } from '../legacy/neural/NeuralEngine';
export declare const useNeuralSystem: (options?: NeuralEngineOptions) => {
    addPulse: (point: {
        x: number;
        y: number;
    }) => void | undefined;
    disperse: () => void | undefined;
    setInteractive: (v: boolean) => void | undefined;
    snapshot: NeuralStateSnapshot | null;
};

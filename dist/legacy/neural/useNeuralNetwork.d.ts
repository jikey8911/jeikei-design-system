export interface NeuralNetworkState {
    isActive: boolean;
    intensity: number;
}
export declare const useNeuralNetwork: (initialIntensity?: number) => NeuralNetworkState;

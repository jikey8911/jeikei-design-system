export type NeuralNode = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    energy: number;
};
export type NeuralPulse = {
    x: number;
    y: number;
    life: number;
};
export type NeuralEngineOptions = {
    density?: number;
    speed?: number;
    interactive?: boolean;
    decay?: number;
};
export type NeuralStateSnapshot = {
    nodes: NeuralNode[];
    pulses: NeuralPulse[];
};
type Subscriber = (state: NeuralStateSnapshot) => void;
export declare class NeuralEngine {
    private nodes;
    private pulses;
    private subscribers;
    private running;
    private frame;
    private options;
    private raf?;
    private area;
    constructor(options?: NeuralEngineOptions);
    private seed;
    setSize(width: number, height: number): void;
    setInteractive(value: boolean): void;
    start(): void;
    stop(): void;
    subscribe(fn: Subscriber): () => void;
    private emit;
    pulse(point: {
        x: number;
        y: number;
    }): void;
    disperse(): void;
    private step;
}
export {};

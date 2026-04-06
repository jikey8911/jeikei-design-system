export interface Node {
    id: number;
    x: number;
    y: number;
}
export interface Pulse {
    from: Node;
    to: Node;
    progress: number;
    speed: number;
}
export declare class NeuralEngine {
    nodes: Node[];
    pulses: Pulse[];
    gridSize: number;
    constructor(width: number, height: number, gridSize?: number);
    init(width: number, height: number): void;
    createPulse(): void;
    update(): void;
}

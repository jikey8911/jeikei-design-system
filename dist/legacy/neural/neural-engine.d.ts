type Point = {
    x: number;
    y: number;
};
type Node = [number, number, number];
type Velocity = [number, number, number];
type Edge = [number, number];
type Pulse = {
    node: number;
    at: number;
    intensity: number;
};
export declare class NeuralEngine3D {
    size: {
        width: number;
        height: number;
    };
    preset: any;
    nodes: Node[];
    velocities: Velocity[];
    energies: number[];
    edges: Edge[];
    lineEnergy: number[];
    pulses: Pulse[];
    spatial: Map<string, number[]>;
    cellSize: number;
    constructor({ width, height, preset }: {
        width: number;
        height: number;
        preset?: string;
    });
    setPreset(presetName: string): void;
    seed(): void;
    resize(width: number, height: number): void;
    addEdge(a: number, b: number): void;
    buildSpatial(cellSize: number): void;
    neighborsAround(point: Point, radius: number): number[];
    triggerPulse(point: Point, intensity?: number): void;
    microPulse(point: Point): void;
    attract(point: Point, strength?: number): void;
    update(dt: number): void;
}
export {};

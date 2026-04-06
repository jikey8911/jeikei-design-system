import React from 'react';
export interface NeuralGridProps {
    sparkles?: boolean;
    gridSize?: number;
    pulseInterval?: number;
    className?: string;
}
export declare const NeuralGrid: React.FC<NeuralGridProps>;

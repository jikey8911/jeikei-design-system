import React from 'react';
import { NeuralEngineOptions } from './NeuralEngine';
export type NeuralGridProps = NeuralEngineOptions & {
    interactive?: boolean;
    className?: string;
    density?: number;
    speed?: number;
};
export declare const NeuralGrid: React.FC<NeuralGridProps>;

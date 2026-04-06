import React from 'react';
export interface ProgressRingProps {
    value: number;
    size?: number;
    strokeWidth?: number;
    className?: string;
}
export declare const ProgressRing: React.FC<ProgressRingProps>;

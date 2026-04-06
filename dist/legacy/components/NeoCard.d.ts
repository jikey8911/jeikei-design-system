import React from 'react';
type Props = {
    title?: string;
    value?: string | number;
    unit?: string;
    trend?: {
        value: string | number;
        up?: boolean;
    };
    variant?: 'cyan' | 'magenta';
    glass?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const NeoCard: React.FC<Props>;
export {};

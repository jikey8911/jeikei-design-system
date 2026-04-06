import React from 'react';
type Props = {
    columns?: {
        base?: number;
        md?: number;
        lg?: number;
    };
    gap?: 'sm' | 'md' | 'lg';
} & React.HTMLAttributes<HTMLDivElement>;
export declare const NeoGrid: React.FC<React.PropsWithChildren<Props>>;
export {};

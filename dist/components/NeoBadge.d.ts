import React from 'react';
type Props = {
    variant?: 'accent' | 'glass' | 'danger' | 'warning' | 'success';
    glow?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;
export declare const NeoBadge: React.FC<Props>;
export {};

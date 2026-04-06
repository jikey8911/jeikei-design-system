import React from 'react';
type Props = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    footer?: React.ReactNode;
    padding?: 'sm' | 'md' | 'lg';
} & React.HTMLAttributes<HTMLDivElement>;
export declare const NeoCard: React.FC<React.PropsWithChildren<Props>>;
export {};

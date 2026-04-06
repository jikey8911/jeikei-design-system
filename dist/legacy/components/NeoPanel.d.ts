import React from 'react';
type Props = {
    title: string;
    actions?: React.ReactNode;
    subdued?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const NeoPanel: React.FC<React.PropsWithChildren<Props>>;
export {};

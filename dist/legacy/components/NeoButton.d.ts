import React from 'react';
type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type NeoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
};
export declare const NeoButton: React.FC<NeoButtonProps>;
export {};

import React from 'react';
export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    glow?: boolean;
}
export declare const NeonButton: React.FC<NeonButtonProps>;

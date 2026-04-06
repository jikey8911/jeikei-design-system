import React from 'react';
export interface NeonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
export declare const NeonInput: React.FC<NeonInputProps>;

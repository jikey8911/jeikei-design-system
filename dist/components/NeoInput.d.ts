import React from 'react';
export type NeoInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helperText?: string;
    error?: string;
};
export declare const NeoInput: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helperText?: string;
    error?: string;
} & React.RefAttributes<HTMLInputElement>>;

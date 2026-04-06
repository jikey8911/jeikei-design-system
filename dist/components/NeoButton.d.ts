import React from 'react';
import { type VariantOptions } from './variants';
export type NeoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: VariantOptions['variant'];
    size?: VariantOptions['size'];
    glow?: boolean;
    fullWidth?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
};
export declare const NeoButton: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: VariantOptions["variant"];
    size?: VariantOptions["size"];
    glow?: boolean;
    fullWidth?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;

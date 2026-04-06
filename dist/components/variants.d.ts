export type VariantOptions = {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
    glow?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
};
export declare const applyCommonStyles: (opts?: VariantOptions) => string;

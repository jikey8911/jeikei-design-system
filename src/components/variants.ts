import { cx } from '../utils/cx';

export type VariantOptions = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  glow?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
};

export const applyCommonStyles = (opts: VariantOptions = {}) => {
  const { variant = 'primary', glow, size = 'md', fullWidth } = opts;
  const sizeMap: Record<NonNullable<typeof size>, string> = {
    xs: 'text-xs px-3 py-1.5',
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2.5',
    lg: 'text-lg px-5 py-3',
    xl: 'text-xl px-6 py-3.5',
  };

  const variantMap: Record<NonNullable<typeof variant>, string> = {
    primary: 'bg-neo-accent text-neo-bg hover:bg-neo-accent-strong',
    secondary: 'bg-neo-surface text-neo-text border border-neo-border hover:border-neo-accent',
    outline: 'border border-neo-accent text-neo-accent bg-transparent hover:bg-neo-accent/10',
    ghost: 'text-neo-text bg-transparent hover:bg-white/5',
    danger: 'bg-red-500 text-white hover:bg-red-400',
    success: 'bg-emerald-500 text-white hover:bg-emerald-400',
  };

  return cx(
    'rounded-neo-md font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neo-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neo-bg',
    sizeMap[size],
    variantMap[variant],
    glow && 'shadow-glow',
    fullWidth && 'w-full'
  );
};

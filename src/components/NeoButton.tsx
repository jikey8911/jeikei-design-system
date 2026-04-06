import React from 'react';
import { cx } from '../utils/cx';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type NeoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const NeoButton: React.FC<NeoButtonProps> = ({ children, variant = 'primary', className, ...rest }) => {
  const base = 'px-6 py-3 rounded-neo-md transition-all duration-300 font-bold uppercase tracking-widest text-[10px]';
  const variants: Record<Variant, string> = {
    primary:
      'bg-neo-accent text-neo-bg shadow-neon-primary hover:brightness-110 hover:scale-[1.02] border-none',
    secondary:
      'bg-neo-surface/40 text-neo-magenta border border-neo-magenta/30 backdrop-blur-md shadow-neon-magenta/20 hover:border-neo-magenta/60 hover:shadow-neon-magenta/40',
    outline:
      'bg-transparent text-neo-accent border border-neo-accent/50 hover:bg-neo-accent/10 hover:shadow-neon-cyan/30',
    ghost:
      'bg-transparent text-neo-muted hover:text-neo-accent hover:bg-white/5',
  };

  return (
    <button className={cx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
};

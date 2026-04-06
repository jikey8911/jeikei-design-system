import React from 'react';
import { cx } from '../utils/cx';

type Variant = 'primary' | 'secondary' | 'outline';

export type NeoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const NeoButton: React.FC<NeoButtonProps> = ({ children, variant = 'primary', className, ...rest }) => {
  const base = 'px-6 py-3 rounded-xl transition-all duration-300 font-semibold';
  const variants: Record<Variant, string> = {
    primary: 'bg-cyan-400/10 text-cyan-200 border border-cyan-300/40 shadow-[0_0_18px_rgba(0,255,255,0.35)] hover:bg-cyan-400/20',
    secondary: 'bg-purple-400/10 text-purple-200 border border-purple-300/40 shadow-[0_0_14px_rgba(170,120,255,0.25)] hover:bg-purple-400/20',
    outline: 'border border-cyan-300/60 text-cyan-200 hover:bg-cyan-300/10',
  };

  return (
    <button className={cx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
};

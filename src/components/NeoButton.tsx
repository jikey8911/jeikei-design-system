import React from 'react';
import { cx } from '../utils/cx';

type Variant = 'primary' | 'secondary' | 'outline';

export type NeoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const NeoButton: React.FC<NeoButtonProps> = ({ children, variant = 'primary', className, ...rest }) => {
  const base = 'px-6 py-3 rounded-xl transition-all duration-300 font-semibold';
  const variants: Record<Variant, string> = {
    primary:
      'bg-cyan-500/12 text-cyan-200 border border-cyan-300/45 shadow-[0_0_18px_rgba(0,255,255,0.35)] hover:shadow-[0_0_32px_rgba(0,255,255,0.55)] hover:bg-cyan-500/18',
    secondary:
      'bg-purple-500/12 text-purple-200 border border-purple-300/45 shadow-[0_0_16px_rgba(170,120,255,0.28)] hover:shadow-[0_0_30px_rgba(170,120,255,0.45)] hover:bg-purple-500/18',
    outline:
      'border border-cyan-300/60 text-cyan-200 hover:bg-cyan-300/10 shadow-[0_0_10px_rgba(0,255,255,0.25)] hover:shadow-[0_0_22px_rgba(0,255,255,0.4)]',
  };

  return (
    <button className={cx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
};

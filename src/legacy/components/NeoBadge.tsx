import React from 'react';
import { cx } from '../../utils/cx';

type Props = {
  variant?: 'accent' | 'glass' | 'danger' | 'warning' | 'success';
  glow?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

export const NeoBadge: React.FC<Props> = ({ variant = 'accent', glow, className, children, ...rest }) => {
  React.useEffect(() => {
    console.warn('JeiKei Legacy: NeoBadge is deprecated. Use V2 components instead.');
  }, []);

  const variantMap = {
    accent: 'bg-neo-accent/15 text-neo-accent border border-neo-accent/40',
    glass: 'bg-white/5 text-neo-text border border-white/10',
    danger: 'bg-red-500/15 text-red-300 border border-red-400/40',
    warning: 'bg-neo-amber/15 text-neo-amber border border-neo-amber/40',
    success: 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/40',
  };
  return (
    <span
      className={cx(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide',
        variantMap[variant],
        glow && 'shadow-glow',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};


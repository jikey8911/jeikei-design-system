import React from 'react';
import { useSystem } from '../system/SystemContext';
import { cx } from '../../utils/cx';

export interface NeoBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'glass' | 'danger' | 'warning' | 'success';
  glow?: boolean;
}

export const NeoBadge: React.FC<NeoBadgeProps> = ({ 
  variant = 'accent', 
  glow = true, 
  className, 
  children, 
  ...rest 
}) => {
  const { engine } = useSystem();

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (engine) {
      const rect = e.currentTarget.getBoundingClientRect();
      // Low-energy structural ripple on hover
      engine.emitPulse(rect.left + rect.width / 2, rect.top + rect.height / 2, 0.2);
    }
  };

  const variantMap = {
    accent: 'text-neo-accent bg-neo-accent/10 border-neo-accent/20 group-hover:bg-neo-accent/20',
    glass: 'text-white/80 bg-white/5 border-white/10 group-hover:bg-white/10',
    danger: 'text-red-400 bg-red-400/10 border-red-400/20 group-hover:bg-red-400/20',
    warning: 'text-amber-400 bg-amber-400/10 border-amber-400/20 group-hover:bg-amber-400/20',
    success: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20 group-hover:bg-emerald-400/20',
  };

  const glowMap = {
    accent: 'shadow-[0_0_15px_-3px_var(--neo-glow)]',
    glass: 'shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]',
    danger: 'shadow-[0_0_15px_-3px_rgba(248,113,113,0.3)]',
    warning: 'shadow-[0_0_15px_-3px_rgba(251,191,36,0.3)]',
    success: 'shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]',
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={cx(
        'jk-badge-v2 group inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-[4px] text-[10px] uppercase font-bold tracking-widest border transition-all duration-300 backdrop-blur-md cursor-default',
        variantMap[variant],
        glow && glowMap[variant],
        className
      )}
      {...rest}
    >
      {/* Decorative structural notch */}
      <span className="w-1 h-1 rounded-full bg-current opacity-60 group-hover:opacity-100 transition-opacity" />
      {children}
    </span>
  );
};

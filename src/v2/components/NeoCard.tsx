import React from 'react';
import { cx } from '../../utils/cx';

export interface NeoCardProps {
  title?: string;
  value?: string;
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
  children?: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const NeoCard: React.FC<NeoCardProps> = ({ 
  title, 
  value, 
  trend,
  children, 
  className,
  glow = true 
}) => {
  return (
    <div className={cx(
      'jk-card-v2 jk-glass relative group overflow-hidden transition-all duration-500 rounded-[var(--neo-radius)] px-7 py-6 cursor-default border-white/5 active:scale-[0.99]',
      glow && 'hover:border-white/20 hover:shadow-[0_0_40px_-10px_var(--neo-glow)]',
      className
    )}>
      {/* Decorative Flare (Upper Left) */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col space-y-4">
        {title && (
          <h3 className="jk-hud-heading text-[10px] tracking-[0.25em] text-white/50 uppercase group-hover:text-neo-accent transition-colors duration-500">
            {title}
          </h3>
        )}
        
        {value !== undefined && (
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold tracking-tighter text-white group-hover:text-neo-accent transition-colors duration-500">
              {value}
            </span>
            {trend && (
              <span className={cx(
                'jk-data-label text-[9px] uppercase font-bold px-2 py-0.5 rounded-[2px] transition-all duration-500',
                trend.direction === 'up' ? 'text-green-400 bg-green-400/10 group-hover:bg-green-400/20' : 
                trend.direction === 'down' ? 'text-red-400 bg-red-400/10 group-hover:bg-red-400/20' : 
                'text-neo-accent bg-neo-accent/10 group-hover:bg-neo-accent/20'
              )}>
                {trend.value}
              </span>
            )}
          </div>
        )}
        
        <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-500">
          {children}
        </div>
      </div>

      {/* Decorative localized light-bleed flare (Bottom Right) */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-neo-accent/5 rounded-full blur-2xl group-hover:bg-neo-accent/20 transition-all duration-700" />
      
      {/* HUD Corner Decor */}
      <div className="absolute top-0 right-0 w-8 h-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors" />
      <div className="absolute top-0 right-0 h-4 w-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors" />
    </div>
  );
};

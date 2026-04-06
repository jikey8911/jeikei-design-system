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
      'jk-card-v2 jk-glass group transition-all duration-500 rounded-[var(--neo-radius)] px-7 py-6 cursor-default border-white/5 active:scale-[0.99]',
      glow && 'hover:border-white/20 hover:shadow-[0_0_40px_-10px_var(--neo-glow)]',
      className
    )}>
      {/* Decorative localized light-bleed flare */}
      <div className="jk-card-flare group-hover:opacity-20 transition-opacity duration-1000" />
      
      <div className="relative z-10 flex flex-col space-y-4">
        {title && (
          <h3 className="jk-hud-heading text-[10px] tracking-[0.25em] text-white/50 uppercase">
            {title}
          </h3>
        )}
        
        {value !== undefined && (
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tighter text-white drop-shadow-sm">
              {value}
            </span>
            {trend && (
              <span className={cx(
                'jk-data-label text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm',
                trend.direction === 'up' ? 'text-green-400 bg-green-400/10' : 
                trend.direction === 'down' ? 'text-red-400 bg-red-400/10' : 
                'text-neo-accent bg-neo-accent/10'
              )}>
                {trend.value}
              </span>
            )}
          </div>
        )}
        
        <div className="text-sm text-neo-muted/80">
          {children}
        </div>
      </div>

      {/* Decorative Micro-Grid Layer */}
      <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-[var(--neo-accent)]/5 rounded-full blur-3xl" />
    </div>
  );
};

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
      'jk-card relative jk-glass p-6 rounded-[var(--neo-radius)] overflow-hidden transition-all duration-500 hover:scale-[1.01]',
      glow && 'jk-neo-glow',
      className
    )}>
      {/* Header Accent Bar */}
      <div className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-[var(--neo-accent)]/80 to-transparent opacity-40" />
      
      <div className="relative z-10 flex flex-col gap-1">
        {title && (
          <header className="flex justify-between items-start mb-2">
            <span className="jk-hud-heading text-neo-accent opacity-70">{title}</span>
            {trend && (
              <span className={cx(
                 'text-[8px] font-mono tracking-tighter px-1 rounded bg-[var(--neo-bg)]',
                 trend.direction === 'up' ? 'text-green-400' : 
                 trend.direction === 'down' ? 'text-red-400' : 'text-neo-muted'
              )}>
                {trend.direction === 'up' ? '▲' : trend.direction === 'down' ? '▼' : '●'} {trend.value}
              </span>
            )}
          </header>
        )}
        
        {value && (
          <div className="text-3xl font-bold tracking-tight text-white mb-2 drop-shadow-[0_0_12px_var(--neo-glow)]">
            {value}
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

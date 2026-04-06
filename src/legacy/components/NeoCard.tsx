import React from 'react';
import { cx } from '../../utils/cx';

type Props = {
  title?: string;
  value?: string | number;
  unit?: string;
  trend?: {
    value: string | number;
    up?: boolean;
  };
  variant?: 'cyan' | 'magenta';
  glass?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const NeoCard: React.FC<Props> = ({ 
  title, 
  value, 
  unit, 
  trend, 
  variant = 'cyan', 
  glass = true, 
  className, 
  children, 
  ...rest 
}) => {
  React.useEffect(() => {
    console.warn('JeiKei Legacy: NeoCard is deprecated. Use V2 components instead.');
  }, []);

  const glowClass = variant === 'cyan' ? 'shadow-neon-cyan/20 ring-1 ring-neo-accent/20' : 'shadow-neon-magenta/20 ring-1 ring-neo-magenta/20';
  const textClass = variant === 'cyan' ? 'text-neo-accent' : 'text-neo-magenta';

  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-neo-lg p-6 transition-all duration-500 hover:scale-[1.02]',
        glass && 'glass-surface',
        glowClass,
        className
      )}
      {...rest}
    >
      <div className="flex flex-col gap-2">
        {title && (
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-neo-muted font-bold mb-1">
            {title}
          </h3>
        )}
        
        <div className="flex items-baseline gap-2">
          {value && (
            <span className={cx('text-4xl font-mono font-bold tracking-tighter drop-shadow-[0_0_12px_rgba(0,255,255,0.3)]', textClass)}>
              {value}
            </span>
          )}
          {unit && (
            <span className="text-xs font-mono text-neo-muted lowercase">
              {unit}
            </span>
          )}
        </div>

        {trend && (
          <div className={cx('flex items-center gap-1 text-[10px] font-mono font-bold mt-1', trend.up ? 'text-neo-accent' : 'text-neo-magenta')}>
            <span>{trend.up ? '↑' : '↓'}</span>
            <span>{trend.value}</span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};


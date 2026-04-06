import React from 'react';
import { cx } from '../../utils/cx';

export interface NeoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: { base?: number; md?: number; lg?: number; xl?: number };
  gap?: 'sm' | 'md' | 'lg' | 'none';
  variant?: 'neural' | 'standard';
}

export const NeoGrid: React.FC<NeoGridProps> = ({
  columns = { base: 1, md: 2, lg: 3 },
  gap = 'md',
  variant = 'neural',
  className,
  children,
  ...rest
}) => {
  const gapMap = { 
    none: 'gap-0',
    sm: 'gap-4', 
    md: 'gap-6', 
    lg: 'gap-8' 
  };
  
  // Tailwind doesn't compute dynamically constructed classes safely without purge/safelist.
  // Converting standard numbers dynamically but assuming simple structure usage.
  const colBase = columns.base ? `grid-cols-${columns.base}` : 'grid-cols-1';
  const colMd = columns.md ? `md:grid-cols-${columns.md}` : '';
  const colLg = columns.lg ? `lg:grid-cols-${columns.lg}` : '';
  const colXl = columns.xl ? `xl:grid-cols-${columns.xl}` : '';

  return (
    <div 
      className={cx(
        'grid w-full transition-all duration-300',
        colBase, colMd, colLg, colXl, gapMap[gap],
        variant === 'neural' && 'relative z-10', // ensures neural structures render properly on top of background
        className
      )} 
      {...rest}
    >
      {children}
    </div>
  );
};

import React from 'react';
import { cx } from '../utils/cx';

type Props = {
  columns?: { base?: number; md?: number; lg?: number };
  gap?: 'sm' | 'md' | 'lg';
} & React.HTMLAttributes<HTMLDivElement>;

export const NeoGrid: React.FC<React.PropsWithChildren<Props>> = ({
  columns = { base: 1, md: 2, lg: 3 },
  gap = 'md',
  className,
  children,
  ...rest
}) => {
  const gapMap = { sm: 'gap-4', md: 'gap-6', lg: 'gap-8' };
  const colBase = `grid-cols-${columns.base ?? 1}`;
  const colMd = columns.md ? `md:grid-cols-${columns.md}` : '';
  const colLg = columns.lg ? `lg:grid-cols-${columns.lg}` : '';
  return (
    <div className={cx('grid', colBase, colMd, colLg, gapMap[gap], className)} {...rest}>
      {children}
    </div>
  );
};

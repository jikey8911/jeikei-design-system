import React from 'react';
import { cx } from '../utils/cx';

type Props = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
} & React.HTMLAttributes<HTMLDivElement>;

export const NeoCard: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  description,
  footer,
  padding = 'md',
  className,
  children,
  ...rest
}) => {
  const paddingMap = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cx(
        'glass-surface text-neo-text border border-white/5 shadow-panel',
        paddingMap[padding],
        'flex flex-col gap-4',
        className
      )}
      {...rest}
    >
      {(title || description) && (
        <header className="space-y-1">
          {title && <h3 className="text-lg font-bold tracking-tight">{title}</h3>}
          {description && <p className="text-sm text-neo-muted">{description}</p>}
        </header>
      )}
      <div className="flex-1">{children}</div>
      {footer && <footer className="pt-2 border-t border-white/5 text-sm">{footer}</footer>}
    </div>
  );
};

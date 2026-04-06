import React from 'react';
import { cx } from '../utils/cx';

type Props = {
  title: string;
  actions?: React.ReactNode;
  subdued?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const NeoPanel: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  actions,
  subdued,
  className,
  children,
  ...rest
}) => {
  return (
    <section
      className={cx(
        'glass-surface border border-white/10 rounded-neo-lg shadow-panel',
        subdued && 'bg-neo-surface/70',
        className
      )}
      {...rest}
    >
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div>
          <h4 className="text-lg font-semibold text-neo-text">{title}</h4>
          <p className="text-xs text-neo-muted uppercase tracking-[0.2em]">Neural Monitor</p>
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </header>
      <div className="p-6">{children}</div>
    </section>
  );
};

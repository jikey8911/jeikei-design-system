import React from 'react';
import { cx } from '../../utils/cx';

type Props = {
  title: string;
  actions?: React.ReactNode;
  subdued?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

console.warn('JeiKei Legacy: NeoPanel is deprecated. Use V2 components instead.');
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
        'glass-surface overflow-hidden transition-all duration-500',
        subdued && 'bg-neo-surface/40 backdrop-blur-sm',
        className
      )}
      {...rest}
    >
      <header className="flex items-center justify-between px-6 py-5 border-b border-white/5 relative">
        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-neo-accent shadow-neon-cyan rounded-full" />
          <div>
            <h4 className="text-xs font-bold text-neo-text uppercase tracking-[0.3em]">{title}</h4>
            <p className="text-[9px] text-neo-muted uppercase tracking-[0.2em] font-medium">Neural Monitor Unit</p>
          </div>
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </header>
      <div className="p-6">{children}</div>
    </section>
  );
};


import React from 'react';
import { cx } from '../utils/cx';

type Props = {
  title?: React.ReactNode;
  value?: React.ReactNode;
  glass?: boolean;
  glow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const NeoCard: React.FC<Props> = ({ title, value, glass = true, glow = true, className, children, ...rest }) => {
  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-2xl p-6 transition hover:scale-[1.01]',
        glass && 'glass bg-gradient-to-br from-white/5 to-white/0',
        glow && 'shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_60px_rgba(0,255,255,0.35)]',
        className
      )}
      {...rest}
    >
      {title && <h3 className="text-sm text-cyan-50/85">{title}</h3>}
      {value && <p className="text-3xl text-cyan-300 mt-2 font-semibold">{value}</p>}
      {children}
    </div>
  );
};

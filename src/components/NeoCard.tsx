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
        'rounded-2xl p-6 transition hover:scale-[1.01]',
        glass && 'glass',
        glow && 'shadow-[0_0_22px_rgba(0,200,255,0.25)]',
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

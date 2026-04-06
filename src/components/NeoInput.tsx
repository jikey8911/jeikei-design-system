import React from 'react';
import { cx } from '../utils/cx';

export type NeoInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  glow?: boolean;
};

export const NeoInput = React.forwardRef<HTMLInputElement, NeoInputProps>(({ glow = true, className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={cx(
        'w-full rounded-xl px-4 py-3 text-cyan-50 placeholder:text-cyan-200/50 transition',
        'bg-white/3 border border-cyan-300/35',
        'backdrop-blur-[18px]',
        glow && 'shadow-[0_0_18px_rgba(0,255,255,0.25)]',
        className
      )}
      {...rest}
    />
  );
});

NeoInput.displayName = 'NeoInput';

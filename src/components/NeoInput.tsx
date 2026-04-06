import React from 'react';
import { cx } from '../utils/cx';

export type NeoInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export const NeoInput = React.forwardRef<HTMLInputElement, NeoInputProps>(
  ({ label, helperText, error, className, ...rest }, ref) => {
    return (
      <label className="block space-y-2 text-sm">
        {label && <span className="text-neo-muted">{label}</span>}
        <input
          ref={ref}
          className={cx(
            'w-full rounded-neo-md bg-neo-surface/80 border border-neo-border px-4 py-3 text-neo-text placeholder:text-slate-500',
            'focus:outline-none focus:ring-2 focus:ring-neo-accent focus:border-neo-accent',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          {...rest}
        />
        {(helperText || error) && (
          <p className={cx('text-xs', error ? 'text-red-400' : 'text-neo-muted')}>{error ?? helperText}</p>
        )}
      </label>
    );
  }
);

NeoInput.displayName = 'NeoInput';

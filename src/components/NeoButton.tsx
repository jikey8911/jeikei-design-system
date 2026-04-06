import React from 'react';
import { applyCommonStyles } from './variants';
import { cx } from '../utils/cx';

export type NeoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Parameters<typeof applyCommonStyles>[0]['variant'];
  size?: Parameters<typeof applyCommonStyles>[0]['size'];
  glow?: boolean;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
};

export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ variant, size, glow, fullWidth, leadingIcon, trailingIcon, className, disabled, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cx(
          applyCommonStyles({ variant, size, glow, fullWidth }),
          'inline-flex items-center justify-center gap-2',
          disabled && 'opacity-60 cursor-not-allowed',
          className
        )}
        disabled={disabled}
        {...rest}
      >
        {leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
        <span>{children}</span>
        {trailingIcon && <span className="shrink-0">{trailingIcon}</span>}
      </button>
    );
  }
);

NeoButton.displayName = 'NeoButton';

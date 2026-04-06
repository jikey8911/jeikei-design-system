import React from 'react';
import { cx } from '../utils/cx';
import { NeoButton } from './NeoButton';

type ToastProps = {
  message: string;
  description?: string;
  variant?: 'success' | 'info' | 'warning' | 'danger';
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
};

export const NeoToast: React.FC<ToastProps> = ({
  message,
  description,
  variant = 'info',
  actionLabel,
  onAction,
  onClose,
}) => {
  const variantMap = {
    success: 'border-emerald-400/40 text-emerald-100',
    info: 'border-neo-accent/40 text-neo-text',
    warning: 'border-neo-amber/40 text-neo-amber',
    danger: 'border-red-400/40 text-red-100',
  };
  return (
    <div className={cx('glass-surface border px-4 py-3 rounded-neo-lg flex items-start gap-3', variantMap[variant])}>
      <div className="flex-1">
        <p className="font-semibold">{message}</p>
        {description && <p className="text-sm text-neo-muted mt-1">{description}</p>}
      </div>
      {actionLabel && (
        <NeoButton size="sm" variant="outline" onClick={onAction}>
          {actionLabel}
        </NeoButton>
      )}
      {onClose && (
        <button
          aria-label="Close toast"
          onClick={onClose}
          className="text-neo-muted hover:text-neo-text transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  );
};

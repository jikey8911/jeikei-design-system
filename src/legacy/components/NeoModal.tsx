import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NeoButton } from './NeoButton';
import { cx } from '../../utils/cx';

type Props = {
  open: boolean;
  title?: string;
  onClose: () => void;
  footer?: React.ReactNode;
};

console.warn('JeiKei Legacy: NeoModal is deprecated. Use V2 components instead.');
export const NeoModal: React.FC<React.PropsWithChildren<Props>> = ({ open, title, onClose, footer, children }) => {
  const [container] = React.useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  if (!open) return null;

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="glass-surface max-w-lg w-full mx-4 border border-white/10 shadow-panel">
        <header className="flex items-start justify-between p-6 pb-3">
          {title && <h3 className="text-xl font-bold text-neo-text">{title}</h3>}
          <NeoButton variant="ghost" aria-label="Close modal" onClick={onClose}>
            ✕
          </NeoButton>
        </header>
        <div className="px-6 pb-4 text-neo-muted">{children}</div>
        <footer className={cx('px-6 pb-6 flex justify-end gap-3', !footer && 'hidden')}>{footer}</footer>
      </div>
    </div>
  );

  return createPortal(modal, container);
};


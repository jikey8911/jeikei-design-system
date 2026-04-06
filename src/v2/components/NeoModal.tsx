import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NeoButton } from './NeoButton';
import { useSystem } from '../system/SystemContext';
import { cx } from '../../utils/cx';

export interface NeoModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const NeoModal: React.FC<NeoModalProps> = ({ 
  open, 
  title, 
  onClose, 
  footer, 
  children 
}) => {
  const [container] = React.useState(() => {
    // Only works in browser environments 
    if (typeof document !== 'undefined') {
      return document.createElement('div');
    }
    return null;
  });

  const { engine } = useSystem();

  useEffect(() => {
    if (!container) return;
    document.body.appendChild(container);
    return () => {
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, [container]);

  useEffect(() => {
    if (open && engine) {
      // Send a strong shockwave pulse to the center of the viewport when a modal opens
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      engine.emitPulse(centerX, centerY, 1.5);
    }
  }, [open, engine]);

  if (!open || !container) return null;

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl transition-all duration-500 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div className="jk-modal-v2 relative w-full max-w-xl mx-4 animate-in zoom-in-95 duration-500 rounded-[var(--neo-radius)]">
        {/* Core Glass Panel */}
        <div className="absolute inset-0 jk-glass bg-white/5 border border-white/10 shadow-[0_0_80px_-20px_var(--neo-glow)] rounded-[var(--neo-radius)]" />
        
        {/* Decorative Light Bleed Behind Modal */}
        <div className="absolute inset-0 bg-neo-accent/20 blur-[100px] pointer-events-none -z-10" />

        <div className="relative z-10">
          <header className="flex items-start justify-between px-8 py-6 border-b border-white/5">
            {title && (
              <h3 className="jk-hud-heading text-lg font-bold text-white tracking-widest uppercase">
                {title}
              </h3>
            )}
            <NeoButton variant="ghost" onClick={onClose} aria-label="Close modal" className="ml-auto">
              ✕
            </NeoButton>
          </header>
          
          <div className="px-8 py-6 text-white/80 text-sm leading-relaxed max-h-[70vh] overflow-y-auto">
            {children}
          </div>
          
          {footer && (
            <footer className="px-8 py-6 pt-4 border-t border-white/5 flex justify-end gap-4 items-center">
              {footer}
            </footer>
          )}
        </div>

        {/* HUD Corner Decorators */}
        <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none border-t border-l border-white/30 rounded-tl-[var(--neo-radius)]" />
        <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none border-b border-r border-white/30 rounded-br-[var(--neo-radius)]" />
      </div>
    </div>
  );

  return createPortal(modal, container);
};

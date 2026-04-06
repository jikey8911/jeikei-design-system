import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NeoButton } from './NeoButton';
import { useSystem } from '../system/SystemContext';
import { cx } from '../../utils/cx';

export interface NeoToastProps {
  message: string;
  description?: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  onClose: () => void;
  actionLabel?: string;
  onAction?: () => void;
}

export const NeoToast: React.FC<NeoToastProps> = ({
  message,
  description,
  variant = 'info',
  duration = 5000,
  onClose,
  actionLabel,
  onAction,
}) => {
  const [container] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.createElement('div');
    }
    return null;
  });

  const { engine } = useSystem();
  const [isVisible, setIsVisible] = useState(true);

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
    if (engine) {
      // Fire a pulse from the top right edge to signify a toast appeared
      engine.emitPulse(window.innerWidth - 50, 50, variant === 'error' ? 1.0 : 0.5);
    }
  }, [engine, variant]);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for exit animation
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!container) return null;

  const variantStyles = {
    info: 'border-neo-accent/30 shadow-[0_0_20px_-5px_var(--neo-glow)] text-neo-accent',
    success: 'border-emerald-400/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.4)] text-emerald-400',
    warning: 'border-amber-400/30 shadow-[0_0_20px_-5px_rgba(251,191,36,0.4)] text-amber-400',
    error: 'border-red-500/40 shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)] text-red-500',
  };

  const toast = (
    <div className="fixed top-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
      <div 
        className={cx(
          'jk-toast-v2 pointer-events-auto flex items-center gap-4 py-4 px-6 min-w-[320px] max-w-md jk-glass bg-black/60 border rounded-[var(--neo-radius)] backdrop-blur-xl transition-all duration-300',
          variantStyles[variant],
          isVisible ? 'animate-in slide-in-from-right-10 fade-in' : 'animate-out slide-out-to-right-10 fade-out'
        )}
      >
        <div className="flex-1 pr-2">
          <p className="font-bold tracking-wide uppercase text-[11px] mb-1 leading-tight text-white jk-hud-heading">
            {message}
          </p>
          {description && (
            <p className="text-sm text-white/60 leading-snug">
              {description}
            </p>
          )}
        </div>
        
        {actionLabel && onAction && (
          <NeoButton 
            variant="outline" 
            onClick={onAction}
            className="whitespace-nowrap px-3 py-1.5 min-h-0 text-[10px] bg-white/5 border-white/20"
          >
            {actionLabel}
          </NeoButton>
        )}
        
        <button 
          onClick={handleClose}
          className="text-white/40 hover:text-white transition-colors p-1"
          aria-label="Close toast"
        >
          ✕
        </button>

        {/* Structural HUD Overlay */}
        <div className="absolute top-0 right-0 w-4 h-[1px] bg-current" />
        <div className="absolute top-0 right-0 h-4 w-[1px] bg-current" />
        <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-current" />
        <div className="absolute bottom-0 left-0 h-4 w-[1px] bg-current" />
      </div>
    </div>
  );

  return createPortal(toast, container);
};

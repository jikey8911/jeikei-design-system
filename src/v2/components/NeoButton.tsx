import React from 'react';
import { useSystem } from '../system/SystemContext';
import { cx } from '../../utils/cx';

export interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  onClick,
  ...props 
}) => {
  const { engine } = useSystem();

  const handleInteraction = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (engine) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      engine.emitPulse(x, y, 1.25);
    }
    if (onClick) onClick(e);
  };

  const base = 'jk-neo-button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 font-bold uppercase tracking-widest';
  
  const variants = {
    primary: 'bg-[var(--neo-accent)] text-[var(--neo-bg)] shadow-[0_0_20px_var(--neo-glow)] hover:brightness-110 active:scale-95',
    secondary: 'jk-glass text-[var(--neo-accent)] border border-[var(--neo-accent)]/20 hover:border-[var(--neo-accent)]/60 hover:shadow-[0_0_20px_var(--neo-glow)]',
    outline: 'bg-transparent border border-[var(--neo-accent)]/30 text-[var(--neo-accent)] hover:bg-[var(--neo-accent)]/10',
    ghost: 'bg-transparent text-[var(--neo-muted)] hover:text-[var(--neo-accent)] hover:bg-white/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-[8px]',
    md: 'px-6 py-3 text-[10px]',
    lg: 'px-8 py-4 text-[12px]'
  };

  return (
    <button 
      className={cx(base, variants[variant], sizes[size], className)}
      onClick={handleInteraction}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Interaction Ripple Layer */}
      <div className="absolute inset-0 bg-white/10 opacity-0 active:opacity-100 transition-opacity" />
    </button>
  );
};

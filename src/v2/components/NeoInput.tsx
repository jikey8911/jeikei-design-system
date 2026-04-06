import React from 'react';
import { useSystem } from '../system/SystemContext';
import { cx } from '../../utils/cx';

export interface NeoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  glow?: boolean;
}

export const NeoInput: React.FC<NeoInputProps> = ({ 
  label, 
  glow = true, 
  className, 
  onFocus,
  onChange,
  ...props 
}) => {
  const { engine } = useSystem();

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (engine) {
      const rect = e.currentTarget.getBoundingClientRect();
      engine.emitPulse(rect.left + rect.width / 2, rect.top + rect.height / 2, 0.8);
    }
    if (onFocus) onFocus(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (engine) {
      const rect = e.currentTarget.getBoundingClientRect();
      engine.emitPulse(rect.left + rect.width / 2, rect.top + rect.height / 2, 0.4);
    }
    if (onChange) onChange(e);
  };

  return (
    <div className="jk-input-v2 flex flex-col space-y-3 group w-full">
      {label && (
        <label className="jk-hud-heading text-[10px] tracking-[0.25em] text-white/40 uppercase pl-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          onFocus={handleFocus}
          onChange={handleChange}
          className={cx(
            'w-full jk-glass bg-white/5 border-white/10 rounded-[var(--neo-radius)] px-5 py-4 text-white text-sm outline-none transition-all duration-300',
            'placeholder:text-white/20',
            glow && 'focus:border-neo-accent/50 focus:shadow-[0_0_30px_-5px_var(--neo-glow)] focus:bg-white/[0.08]',
            className
          )}
          {...props}
        />
        {/* Animated Bottom Line Glow */}
        <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-neo-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_var(--neo-glow)]" />
      </div>
    </div>
  );
};

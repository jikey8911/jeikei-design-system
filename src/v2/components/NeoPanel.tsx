import React from 'react';
import { useSystem } from '../system/SystemContext';
import { cx } from '../../utils/cx';

export interface NeoPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export const NeoPanel: React.FC<NeoPanelProps> = ({ 
  glow = false, // Panels default to false to not overpower the screen
  className,
  children,
  ...rest
}) => {
  const { engine } = useSystem();

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (engine) {
      const rect = e.currentTarget.getBoundingClientRect();
      // Broad atmospheric pulse
      engine.emitPulse(rect.left + rect.width / 2, rect.top + rect.height / 2, 0.3);
    }
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      className={cx(
        'jk-panel-v2 relative w-full jk-glass bg-black/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-700',
        glow && 'hover:border-white/10 hover:shadow-[0_0_50px_-15px_var(--neo-glow)] hover:bg-white/[0.02]',
        className
      )}
      {...rest}
    >
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

import React from 'react';

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

console.warn('JeiKei Legacy: GlassCard is deprecated. Use V2 components instead.');
export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", glow = true }) => {
  return (
    <div className={`
      bg-[rgba(10,15,20,0.45)]
      backdrop-blur-md
      rounded-[16px]
      border border-[rgba(0,255,156,0.2)]
      shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
      p-6
      transition-all duration-300 ease
      hover:border-[rgba(0,255,156,0.4)]
      ${glow ? 'hover:shadow-[0_0_40px_rgba(0,255,156,0.1)]' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};


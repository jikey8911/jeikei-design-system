import React from 'react';

export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  glow?: boolean;
}

console.warn('JeiKei Legacy: NeonButton is deprecated. Use V2 components instead.');
export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  variant = 'primary',
  glow = true,
  className = "",
  ...props
}) => {
  const baseStyles = "px-6 py-2 rounded-full font-bold transition-all duration-200 active:scale-95";

  const variants = {
    primary: `bg-[#00ff9c] text-black hover:bg-[#00e58c] ${glow ? 'hover:shadow-[0_0_20px_#00ff9c]' : ''}`,
    secondary: `bg-transparent border border-[#00ff9c] text-[#00ff9c] hover:bg-[#00ff9c1a] ${glow ? 'hover:shadow-[0_0_15px_#00ff9c4d]' : ''}`,
    ghost: `bg-transparent text-[#00ff9c] hover:bg-[#00ff9c1a]`,
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};


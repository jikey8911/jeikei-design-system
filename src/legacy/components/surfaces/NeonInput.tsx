import React from 'react';

export interface NeonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

console.warn('JeiKei Legacy: NeonInput is deprecated. Use V2 components instead.');
export const NeonInput: React.FC<NeonInputProps> = ({ label, error, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs text-[rgba(0,255,156,0.6)] font-mono uppercase tracking-wider ml-2">
          {label}
        </label>
      )}
      <input
        className={`
          bg-[rgba(0,0,0,0.6)]
          border border-[rgba(0,255,156,0.2)]
          rounded-xl
          px-5 py-3
          text-[#00ffe0]
          placeholder:text-[rgba(0,255,224,0.3)]
          outline-none
          transition-all duration-300
          focus:border-[rgba(0,255,224,0.5)]
          focus:shadow-[inset_0_0_15px_rgba(0,255,224,0.1),0_0_15px_rgba(0,255,224,0.1)]
          ${error ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-[10px] text-red-500 ml-2 font-mono">
          {error}
        </span>
      )}
    </div>
  );
};


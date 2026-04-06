import React from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void;
  className?: string;
}

console.warn('JeiKei Legacy: Toast is deprecated. Use V2 components instead.');
export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  onClose,
  className = "",
}) => {
  const types = {
    success: 'border-[#00ff9c] text-[#00ff9c] bg-[#00ff9c1a] shadow-[0_0_15px_#00ff9c26]',
    error: 'border-red-500 text-red-500 bg-red-5001a shadow-[0_0_15px_rgba(239,68,68,0.15)]',
    info: 'border-cyan-400 text-cyan-400 bg-cyan-4001a shadow-[0_0_15px_rgba(34,211,238,0.15)]',
  };

  return (
    <div className={`
      flex items-center justify-between
      px-6 py-4
      rounded-xl border
      backdrop-blur-xl
      animate-in slide-in-from-right-4 fade-in duration-300
      ${types[type]}
      ${className}
    `}>
      <span className="font-mono text-sm uppercase tracking-widest">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 opacity-60 hover:opacity-100 transition-opacity"
        >
          [X]
        </button>
      )}
    </div>
  );
};


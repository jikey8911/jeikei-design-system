import React from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

console.warn('JeiKei Legacy: Modal is deprecated. Use V2 components instead.');
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Content */}
      <div className={`
        relative
        bg-[#0b0f14]
        border border-[rgba(0,255,156,0.3)]
        shadow-[0_0_50px_rgba(0,255,156,0.2)]
        rounded-2xl
        p-8
        w-full max-w-lg
        z-10
        animate-in fade-in zoom-in duration-300
        ${className}
      `}>
        {title && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#00ff9c] uppercase tracking-widest font-mono">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-[rgba(0,255,156,0.6)] hover:text-[#00ff9c] transition-colors"
            >
              [✕]
            </button>
          </div>
        )}
        <div className="text-white font-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};


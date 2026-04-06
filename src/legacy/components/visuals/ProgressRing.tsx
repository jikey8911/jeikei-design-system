import React from 'react';

export interface ProgressRingProps {
  value: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  className?: string;
}

console.warn('JeiKei Legacy: ProgressRing is deprecated. Use V2 components instead.');
export const ProgressRing: React.FC<ProgressRingProps> = ({
  value,
  size = 160,
  strokeWidth = 10,
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          className="text-[rgba(0,255,156,0.1)]"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-[#00ff9c] transition-all duration-500 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            filter: 'drop-shadow(0 0 8px rgba(0, 255, 156, 0.6))'
          }}
        />
      </svg>
      <div className="absolute text-3xl font-bold text-[#00ff9c] font-mono">
        {Math.round(value)}%
      </div>
    </div>
  );
};


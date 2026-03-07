import React from 'react';

export interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  className = "",
}) => {
  return (
    <div className={`
      bg-[#0b0f14]
      border border-[rgba(0,255,156,0.15)]
      rounded-xl p-6 backdrop-blur
      shadow-[0_0_20px_rgba(0,255,156,0.08)]
      transition-all duration-300
      hover:shadow-[0_0_30px_rgba(0,255,156,0.15)]
      hover:border-[rgba(0,255,156,0.3)]
      ${className}
    `}>
      <p className="text-xs text-[rgba(0,255,156,0.6)] tracking-widest uppercase font-medium">
        {title}
      </p>
      <div className="flex items-baseline gap-2 mt-2">
        <h2 className="text-3xl font-bold text-[#00ff9c]">
          {value}
        </h2>
        {trend && (
          <span className={`text-xs ${trend === 'up' ? 'text-[#00ff9c]' : 'text-red-400'}`}>
            {trend === 'up' ? '▲' : '▼'} {trendValue}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-xs text-[rgba(0,255,156,0.4)] mt-2 font-mono">
          {subtitle}
        </p>
      )}
    </div>
  );
};

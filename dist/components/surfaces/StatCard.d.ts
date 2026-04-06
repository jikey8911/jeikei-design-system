import React from 'react';
export interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    trend?: 'up' | 'down';
    trendValue?: string;
    className?: string;
}
export declare const StatCard: React.FC<StatCardProps>;

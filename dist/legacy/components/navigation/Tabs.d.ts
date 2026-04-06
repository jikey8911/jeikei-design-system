import React from 'react';
export interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}
export interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (id: string) => void;
    className?: string;
}
export declare const Tabs: React.FC<TabsProps>;

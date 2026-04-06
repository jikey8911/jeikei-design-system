import React from 'react';
export type Tab = {
    id: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
};
type Props = {
    tabs: Tab[];
    value?: string;
    defaultValue?: string;
    onChange?: (id: string) => void;
};
export declare const NeoTabs: React.FC<Props>;
export {};

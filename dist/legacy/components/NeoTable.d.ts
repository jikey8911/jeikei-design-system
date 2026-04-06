import React from 'react';
export type NeoTableColumn<T> = {
    key: keyof T;
    header: string;
    align?: 'left' | 'center' | 'right';
    render?: (row: T) => React.ReactNode;
};
type Props<T> = {
    columns: NeoTableColumn<T>[];
    data: T[];
    striped?: boolean;
    dense?: boolean;
};
export declare function NeoTable<T extends Record<string, any>>({ columns, data, striped, dense, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};

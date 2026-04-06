import React from 'react';
export interface Column<T> {
    header: string;
    key: keyof T;
    render?: (value: any, item: T) => React.ReactNode;
}
export interface DataGridProps<T> {
    data: T[];
    columns: Column<T>[];
    className?: string;
}
export declare const DataGrid: <T extends {
    id: string | number;
}>({ data, columns, className, }: DataGridProps<T>) => import("react/jsx-runtime").JSX.Element;

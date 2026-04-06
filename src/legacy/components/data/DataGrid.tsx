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

console.warn('JeiKei Legacy: DataGrid is deprecated. Use V2 components instead.');
export const DataGrid = <T extends { id: string | number }>({
  data,
  columns,
  className = "",
}: DataGridProps<T>) => {
  return (
    <div className={`overflow-x-auto rounded-xl border border-[rgba(0,255,156,0.1)] bg-black/40 backdrop-blur ${className}`}>
      <table className="w-full text-left border-collapse">
        <thead className="bg-[rgba(0,255,156,0.05)] text-[rgba(0,255,156,0.7)] font-mono text-xs uppercase tracking-widest">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="px-6 py-4 font-medium border-b border-[rgba(0,255,156,0.1)]">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm text-cyan-100">
          {data.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-[rgba(0,255,156,0.03)] border-b border-[rgba(0,255,156,0.05)] transition-colors"
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-6 py-4">
                  {col.render ? col.render(item[col.key], item) : String(item[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


import React from 'react';
import { cx } from '../../utils/cx';

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

export function NeoTable<T extends Record<string, any>>({
  columns,
  data,
  striped = true,
  dense = false,
}: Props<T>) {
  return (
    <div className="overflow-hidden rounded-neo-lg border border-white/10 glass-surface">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-white/5 text-neo-muted uppercase tracking-[0.2em] text-xs">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className={cx('px-4 py-3', col.align === 'right' && 'text-right')}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={cx(
                'transition-colors',
                striped && idx % 2 === 1 ? 'bg-white/5' : 'bg-transparent',
                'hover:bg-white/8'
              )}
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={cx(
                    'px-4',
                    dense ? 'py-2.5' : 'py-3.5',
                    col.align === 'right' && 'text-right',
                    col.align === 'center' && 'text-center'
                  )}
                >
                  {col.render ? col.render(row) : (row[col.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


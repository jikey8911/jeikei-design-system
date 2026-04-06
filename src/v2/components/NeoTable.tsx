import React from 'react';
import { useSystem } from '../system/SystemContext';
import { cx } from '../../utils/cx';

export type ColumnInfo = {
  header: string;
  accessor: string;
};

export interface NeoTableProps {
  columns: ColumnInfo[];
  data: any[];
  className?: string;
}

export const NeoTable: React.FC<NeoTableProps> = ({ columns, data, className }) => {
  const { engine } = useSystem();

  const handleRowEnter = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (engine) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      // Emit a fast structural pulse to track horizontal flow
      engine.emitPulse(x, y, 0.4);
    }
  };

  return (
    <div className={cx("jk-table-v2 w-full overflow-x-auto rounded-[var(--neo-radius)] border border-white/5 bg-white/[0.02] backdrop-blur-md", className)}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            {columns.map((col, i) => (
              <th 
                key={i} 
                className="jk-hud-heading text-[10px] tracking-widest uppercase text-white/40 px-6 py-4 font-normal"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              onMouseEnter={handleRowEnter}
              className="group transition-all duration-300 hover:bg-white/[0.04]"
            >
              {columns.map((col, colIndex) => (
                <td 
                  key={colIndex} 
                  className="px-6 py-4 text-sm text-white/80 group-hover:text-neo-accent transition-colors duration-300 relative"
                >
                  {row[col.accessor]}
                  {colIndex === 0 && (
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neo-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100 shadow-[0_0_10px_var(--neo-glow)]" />
                  )}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-6 py-8 text-center text-white/30 text-xs tracking-widest uppercase jk-hud-heading">
                NO DATA TOPOLOGIES FOUND
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

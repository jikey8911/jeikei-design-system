import React from 'react';
import { cx } from '../utils/cx';

export type Tab = { id: string; label: string; content: React.ReactNode; disabled?: boolean };

type Props = {
  tabs: Tab[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
};

export const NeoTabs: React.FC<Props> = ({ tabs, value, defaultValue, onChange }) => {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.id);
  const active = value ?? internal;

  const handleSelect = (id: string, disabled?: boolean) => {
    if (disabled) return;
    setInternal(id);
    onChange?.(id);
  };

  return (
    <div className="w-full">
      <div className="flex gap-2 border-b border-white/10">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              className={cx(
                'px-4 py-2 text-sm font-semibold rounded-t-md transition-colors',
                tab.disabled && 'opacity-50 cursor-not-allowed',
                isActive
                  ? 'text-neo-accent border-b-2 border-neo-accent'
                  : 'text-neo-muted hover:text-neo-text'
              )}
              aria-selected={isActive}
              role="tab"
              onClick={() => handleSelect(tab.id, tab.disabled)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            tab.id === active && (
              <div role="tabpanel" key={tab.id} className="text-neo-text">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

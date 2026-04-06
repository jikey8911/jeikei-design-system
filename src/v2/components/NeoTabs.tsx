import React, { useState } from 'react';
import { useSystem } from '../system/SystemContext';
import { cx } from '../../utils/cx';

export type TabInfo = {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
};

export interface NeoTabsProps {
  tabs: TabInfo[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export const NeoTabs: React.FC<NeoTabsProps> = ({ 
  tabs, 
  value, 
  defaultValue, 
  onChange,
  className 
}) => {
  const [internal, setInternal] = useState(defaultValue ?? tabs[0]?.id);
  const active = value ?? internal;
  const { engine } = useSystem();

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>, id: string, disabled?: boolean) => {
    if (disabled) return;
    setInternal(id);
    onChange?.(id);

    if (engine) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.bottom; // Send pulse from the sliding border track
      engine.emitPulse(x, y, 0.6);
    }
  };

  return (
    <div className={cx("jk-tabs-v2 w-full flex flex-col space-y-6", className)}>
      {/* Tab Track */}
      <div className="relative flex border-b border-white/10" role="tablist">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
              onClick={(e) => handleSelect(e, tab.id, tab.disabled)}
              className={cx(
                'relative px-6 py-4 jk-hud-heading text-[11px] tracking-widest uppercase transition-all duration-300',
                tab.disabled && 'opacity-30 cursor-not-allowed',
                !tab.disabled && !isActive && 'text-white/40 hover:text-white/80 hover:bg-white/[0.02]',
                isActive && 'text-neo-accent bg-neo-accent/5'
              )}
            >
              {tab.label}
              
              {/* Active Tab Glow Indicator */}
              {isActive && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-neo-accent shadow-[0_0_15px_var(--neo-glow)] animate-in fade-in slide-in-from-bottom-2 duration-300" />
              )}
              {/* Subtle light bleed upwards when active */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-neo-accent/10 to-transparent pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="relative z-10 jk-glass p-6 border border-white/5 rounded-b-[var(--neo-radius)] rounded-tr-[var(--neo-radius)] bg-white/[0.01]">
        {tabs.map((tab) => (
          <div 
            key={tab.id} 
            role="tabpanel" 
             className={cx(
              'transition-all duration-500',
              tab.id === active ? 'opacity-100 animate-in fade-in zoom-in-95' : 'opacity-0 hidden'
            )}
          >
            {tab.content}
          </div>
        ))}
        {/* HUD UI Elements on the panel */}
        <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none border-b border-r border-white/10 rounded-br-[var(--neo-radius)]" />
      </div>
    </div>
  );
};

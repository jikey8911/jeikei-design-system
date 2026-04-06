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

console.warn('JeiKei Legacy: Tabs is deprecated. Use V2 components instead.');
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex gap-2 mb-6 border-b border-[rgba(0,255,156,0.1)] pb-2 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`
                px-4 py-2 rounded-lg text-sm font-mono uppercase tracking-widest transition-all duration-300
                ${isActive
                  ? 'bg-[rgba(0,255,156,0.1)] text-[#00ff9c] border border-[rgba(0,255,156,0.3)] shadow-[0_0_15px_rgba(0,255,156,0.1)]'
                  : 'text-[rgba(0,255,156,0.4)] hover:text-[rgba(0,255,156,0.7)] hover:bg-[rgba(0,255,156,0.05)]'}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
        {tabs.find(t => t.id === activeTab)?.content}
      </div>
    </div>
  );
};


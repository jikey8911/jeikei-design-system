import React from 'react';
import { V2, cx } from 'jeikei-design-system';

const { NeoLayout, NeoButton, NeoCard, useSystem } = V2;

const ThemeToggler = () => {
  const { theme, setTheme } = useSystem();
  return (
    <NeoButton 
      variant="secondary" 
      size="sm" 
      onClick={() => setTheme(theme === 'mission' ? 'nebula' : 'mission')}
    >
      MODE: {theme.toUpperCase()}
    </NeoButton>
  );
};

function App() {
  return (
    <NeoLayout>
      <div className="space-y-12">
        {/* HERO SECTION */}
        <div className="flex flex-col items-center text-center space-y-6 py-12">
          <div className="jk-hud-heading text-neo-accent opacity-50 mb-[-1rem]">SYSTEM_CORE_UPGRADE</div>
          <h1 className="text-7xl font-black tracking-tighter uppercase drop-shadow-[0_0_30px_var(--neo-glow)]">
            Living Interface
          </h1>
          <p className="text-neo-muted max-w-xl jk-data-label text-xs tracking-widest leading-relaxed opacity-60">
            A high-fidelity neural network engine synchronized across the entire visual system. 
            Interaction-driven energy propagation with real-time WebGL rendering.
          </p>
          <div className="flex gap-4 pt-4">
             <NeoButton size="lg">
               Initialize System
             </NeoButton>
             <ThemeToggler />
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <NeoCard title="Node Density" value="1,402" trend={{ value: '12%', direction: 'up' }} />
          <NeoCard title="Neural Energy" value="0.84 μV" trend={{ value: 'STABLE', direction: 'neutral' }} />
          <NeoCard title="Latency" value="1.2ms" trend={{ value: 'FAST', direction: 'up' }} />
          <NeoCard title="Protocol" value="V2.0 PRO" trend={{ value: 'MODERN', direction: 'neutral' }} />
        </div>

        {/* MAIN INTERFACE BLOCKS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* SIDEBAR BLOCK */}
           <NeoCard title="System Parameters" className="lg:col-span-1">
              <div className="space-y-6 py-2">
                 <div className="space-y-3">
                    <div className="flex justify-between items-center">
                       <span className="jk-data-label text-[8px]">Simulation Sensitivity</span>
                       <span className="jk-data-label text-neo-accent">85%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 rounded-full">
                       <div className="h-full w-[85%] bg-neo-accent shadow-neon-primary" />
                    </div>
                 </div>

                 <div className="space-y-3">
                    <div className="flex justify-between items-center">
                       <span className="jk-data-label text-[8px]">Interaction Decay</span>
                       <span className="jk-data-label text-neo-magenta">40ms</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 rounded-full">
                       <div className="h-full w-[40%] bg-neo-magenta shadow-neon-magenta" />
                    </div>
                 </div>

                 <div className="pt-4 grid grid-cols-2 gap-2">
                    <NeoButton variant="outline" size="sm">Reset Mesh</NeoButton>
                    <NeoButton variant="outline" size="sm">Calibrate</NeoButton>
                 </div>
              </div>
           </NeoCard>

           {/* CONTENT BLOCK */}
           <NeoCard title="Live Process Feed" className="lg:col-span-2">
              <div className="space-y-2 font-mono text-[9px]">
                 {[
                   { id: '4F9A', task: 'RECONSTRUCTING_GRID_LAYER', status: 'COMPLETE' },
                   { id: '2B1C', task: 'OPTIMIZING_SHADERS_V2', status: 'IN_PROGRESS' },
                   { id: '9E0D', task: 'SYNCING_CONTEXT_PROVIDER', status: 'ACTIVE' },
                   { id: '7A8B', task: 'INJECTING_CSS_VARIABLES', status: 'DONE' },
                   { id: '1F3E', task: 'DEPRECATING_LEGACY_CORE', status: 'WARNING' }
                 ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-colors group">
                       <div className="flex items-center gap-4">
                          <span className="text-neo-muted opacity-40">[{log.id}]</span>
                          <span className="tracking-widest uppercase opacity-80 group-hover:opacity-100">{log.task}</span>
                       </div>
                       <span className={cx(
                         "jk-data-label px-2 py-0.5 rounded",
                         log.status === 'COMPLETE' ? 'text-green-500 bg-green-500/10' :
                         log.status === 'ACTIVE' ? 'text-neo-accent bg-neo-accent/10' :
                         log.status === 'WARNING' ? 'text-neo-magenta bg-neo-magenta/10' : 'text-white/40'
                       )}>
                         {log.status}
                       </span>
                    </div>
                 ))}
                 <div className="pt-4 flex justify-between items-center">
                    <span className="jk-data-label opacity-20 italic">5 remaining tasks in queue...</span>
                    <NeoButton variant="ghost" size="sm">Expand System Logs</NeoButton>
                 </div>
              </div>
           </NeoCard>
        </div>

        {/* CALL TO ACTION / STRESS TEST */}
        <div className="p-12 jk-glass rounded-[var(--neo-radius)] border border-white/5 text-center space-y-6 relative overflow-hidden group">
           <div className="absolute inset-0 bg-neo-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           <h2 className="jk-hud-heading text-3xl mb-2">Neural Stress Test</h2>
           <p className="text-neo-muted max-w-lg mx-auto jk-data-label opacity-50">
             Trigger system-wide interference patterns and witness the Living Interface react globally. 
             Click anywhere or interact with buttons to propagate energy across the node network.
           </p>
           <div className="flex justify-center gap-6 pt-4">
              <NeoButton variant="primary">Execute Wave</NeoButton>
              <NeoButton variant="outline">Force Sync</NeoButton>
           </div>
        </div>
      </div>
    </NeoLayout>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
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

const SystemHUD = () => {
  const { engine } = useSystem();
  const [metrics, setMetrics] = useState({ energy: 0, pulses: 0 });

  useEffect(() => {
    if (!engine) return;
    return engine.subscribe((state) => {
      setMetrics({
        energy: state.totalEnergy,
        pulses: state.pulses.length
      });
    });
  }, [engine]);

  return (
    <div className="flex gap-8 items-center">
       <div className="flex flex-col items-end">
          <span className="jk-data-label text-[7px] opacity-40">CORE_ENERGY_FLUX</span>
          <span className="text-neo-accent font-mono text-[10px]">{(metrics.energy * 10).toFixed(4)} EV</span>
       </div>
       <div className="flex flex-col items-end">
          <span className="jk-data-label text-[7px] opacity-40">ACTIVE_SYNAPSES</span>
          <span className="text-neo-magenta font-mono text-[10px]">{metrics.pulses}</span>
       </div>
    </div>
  );
};

function App() {
  return (
    <NeoLayout>
      <div className="space-y-12">
        {/* HERO SECTION */}
        <div className="flex flex-col items-center text-center space-y-6 py-12">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-neo-accent/30" />
             <div className="jk-hud-heading text-neo-accent opacity-50">SYSTEM_CORE_V2_PRO</div>
             <div className="h-[1px] w-12 bg-neo-accent/30" />
          </div>
          
          <h1 className="text-8xl font-black tracking-tighter uppercase drop-shadow-[0_0_40px_var(--neo-glow)]">
            Living Interface
          </h1>
          
          <p className="text-neo-muted max-w-2xl jk-data-label text-xs tracking-[0.2em] leading-relaxed opacity-60">
            Advanced Graph-Based Neural Propagation Engine. 
            <br/> Real-time energy transfer via weight-distributed edge algorithms.
          </p>

          <div className="flex gap-4 pt-4">
             <NeoButton size="lg" onClick={(e) => {
                // Global pulse test
                console.log('INIT_PROTO');
             }}>
               Initialize Protocol
             </NeoButton>
             <ThemeToggler />
          </div>
          
          <div className="pt-8">
             <SystemHUD />
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <NeoCard title="Node Density" value="1,402" trend={{ value: 'OPTIMAL', direction: 'neutral' }} />
          <NeoCard title="Sync Latency" value="0.4ms" trend={{ value: 'STABLE', direction: 'up' }} />
          <NeoCard title="Mesh Stability" value="99.9%" glow={false} />
          <NeoCard title="Uptime" value="∞" trend={{ value: 'LIVE', direction: 'neutral' }} />
        </div>

        {/* MAIN INTERFACE BLOCKS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <NeoCard title="Neural Parameters" className="lg:col-span-1">
              <div className="space-y-6 py-2">
                 <div className="space-y-3">
                    <div className="flex justify-between items-center">
                       <span className="jk-data-label text-[8px]">Propagation Depth</span>
                       <span className="jk-data-label text-neo-accent">5 Hops</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5">
                       <div className="h-full w-[100%] bg-neo-accent shadow-neon-primary" />
                    </div>
                 </div>

                 <div className="space-y-3">
                    <div className="flex justify-between items-center">
                       <span className="jk-data-label text-[8px]">Energy Decay Rate</span>
                       <span className="jk-data-label text-neo-magenta">0.08 / step</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5">
                       <div className="h-full w-[40%] bg-neo-magenta shadow-neon-magenta" />
                    </div>
                 </div>

                 <div className="pt-4 grid grid-cols-2 gap-2">
                    <NeoButton variant="outline" size="sm">Purge Pulses</NeoButton>
                    <NeoButton variant="outline" size="sm">Recalibrate</NeoButton>
                 </div>
              </div>
           </NeoCard>

           <NeoCard title="Real-time Node Event Stream" className="lg:col-span-2">
              <div className="space-y-1 font-mono text-[9px] max-h-[300px] overflow-hidden opacity-80">
                 {[
                   'NODE_AUTH_SUCCESS :: [0x4F2A]',
                   'INITIALIZING_GRAPH_PHYSICS_MODEL',
                   'PROPAGATION_PULSE_GEN_0_ACTIVE',
                   'SYNCING_DASHBOARD_METRICS_BUS',
                   'DECAY_ALGORITHM_THRESHOLD_MET',
                   'CORE_V2_READY_FOR_CONSUMPTION',
                   'NEO_BUTTON_CLICK_EMITTING_SYNC_PULSE',
                   'MAPPING_BOUNDING_CLIENT_RECT_SUCCESS',
                   'THEME_SYNC_COMPLETE'
                 ].map((log, i) => (
                    <div key={i} className="flex gap-4 p-2 border-b border-white/5 hover:bg-white/5 transition-colors">
                       <span className="text-neo-accent/40">[{new Date().toLocaleTimeString()}]</span>
                       <span className="tracking-widest uppercase">{log}</span>
                    </div>
                 ))}
                 <div className="pt-4 flex justify-between items-center px-2">
                    <span className="jk-data-label opacity-20 italic">AWAITING_USER_INPUT...</span>
                    <NeoButton variant="ghost" size="sm">System Logs</NeoButton>
                 </div>
              </div>
           </NeoCard>
        </div>

        {/* INTERACTIVE AREA */}
        <div className="p-16 jk-glass rounded-[var(--neo-radius)] border border-white/5 text-center space-y-8 relative group overflow-hidden">
           <div className="absolute inset-0 bg-neo-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="relative z-10 space-y-6">
              <h2 className="jk-hud-heading text-4xl">Interaction Stress Test</h2>
              <p className="text-neo-muted max-w-xl mx-auto jk-data-label text-[10px] tracking-[0.3em] opacity-40">
                Trigger high-order propagation waves by clicking UI elements. 
                Energy will flow through the graph edges based on the Pro engine logic.
              </p>
              <div className="flex justify-center gap-8 pt-4">
                 <NeoButton variant="primary" size="lg">Send Pulse Wave</NeoButton>
                 <NeoButton variant="outline" size="lg">Force Mesh Sync</NeoButton>
              </div>
           </div>
        </div>
      </div>
    </NeoLayout>
  );
}

export default App;

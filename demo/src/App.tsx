import React, { useState, useEffect } from 'react';
import { V2 } from 'jeikei-design-system';

const { NeoLayout, NeoButton, NeoCard, NeoInput, useSystem } = V2;

// --- Sub-Components for the Pro Dashboard ---

const SidebarItem = ({ icon, active = false }: { icon: string; active?: boolean }) => (
  <div className={`w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ${active ? 'bg-neo-accent text-black' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    <span className="text-xl">{icon}</span>
  </div>
);

const ActivityItem = ({ title, time, status = 'info' }: { title: string; time: string; status?: 'info' | 'success' | 'warning' }) => (
  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
    <div className={`w-1.5 h-6 rounded-full mt-0.5 ${status === 'success' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : status === 'warning' ? 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'bg-neo-accent shadow-[0_0_10px_var(--neo-glow)]'}`} />
    <div className="flex flex-col">
      <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">{title}</span>
      <span className="text-[9px] font-mono text-white/30 uppercase">{time} // SYSTEM_SECURE</span>
    </div>
  </div>
);

function App() {
  const { theme, setTheme, engine } = useSystem();
  const [metrics, setMetrics] = useState({ energy: 0, nodes: 0 });
  const [view, setView] = useState<'showcase' | 'dashboard'>('showcase');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!engine) return;
    const unsubscribe = engine.subscribe((state) => {
      setMetrics({
        energy: state.totalEnergy,
        nodes: state.nodes.filter(n => n.energy > 0.1).length
      });
    });
    return unsubscribe;
  }, [engine]);

  const renderShowcase = () => (
    <div className="max-w-[1200px] mx-auto space-y-12 py-16 px-4 fade-in">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start space-y-1">
             <div className="text-5xl font-black tracking-[0.3em] text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                JEIKEI
             </div>
             <div className="text-[10px] tracking-[0.8em] text-white/40 uppercase ml-1">
                LIVING_INTERFACE_v2.0
             </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-2 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
               <button 
                  onClick={() => setTheme('nebula')}
                  className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${theme === 'nebula' ? 'bg-neo-accent text-black shadow-neon-primary' : 'text-white/40 hover:text-white'}`}
               >
                  NEBULA
               </button>
               <button 
                  onClick={() => setTheme('mission')}
                  className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${theme === 'mission' ? 'bg-neo-accent text-black shadow-neon-primary' : 'text-white/40 hover:text-white'}`}
               >
                  MISSION
               </button>
            </div>
            <NeoButton variant="primary" size="md" onClick={() => setView('dashboard')}>
               GO TO DASHBOARD
            </NeoButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <NeoCard title="System Energy" value={`${metrics.energy.toFixed(1)}GW`} trend={{ value: '+12.4%', direction: 'up' }}>
              Active neural propagation energy detected in the global system grid.
           </NeoCard>
           <NeoCard title="Neural Activity" value={metrics.nodes.toString()} trend={{ value: 'OPTIMAL', direction: 'neutral' }}>
              Currently active high-energy nodes reacting to user interaction.
           </NeoCard>
           <NeoCard title="Global Latency" value="12ms" trend={{ value: '-2ms', direction: 'up' }}>
              Propagating pulses through the graph engine at sub-millisecond speeds.
           </NeoCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
           <NeoCard title="Pulse Emission Test">
              <div className="space-y-6 pt-4">
                 <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-wider">
                    Interact with the components below to trigger real-time neural ripples.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <NeoButton variant="primary" size="md">Emit Signal</NeoButton>
                    <NeoButton variant="secondary" size="md">Calibrate</NeoButton>
                    <NeoButton variant="outline" size="md">Reset</NeoButton>
                 </div>
              </div>
           </NeoCard>
           <NeoCard title="Data Input Sync">
              <div className="space-y-6 pt-4">
                 <NeoInput label="Network Identifier" placeholder="Enter system hash..." />
                 <NeoInput label="Propagation Intensity" placeholder="1.25" />
              </div>
           </NeoCard>
        </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="flex h-screen w-full bg-[#020202]/50 backdrop-blur-3xl overflow-hidden fade-in">
      {/* SIDEBAR */}
      <div className="w-20 flex flex-col items-center py-8 gap-8 border-r border-white/5 jk-glass relative z-50">
        <div className="w-10 h-10 bg-neo-accent flex items-center justify-center rounded-lg shadow-neon-primary text-black font-black text-xl mb-4">
          JK
        </div>
        <SidebarItem icon="⟁" active />
        <SidebarItem icon="⦿" />
        <SidebarItem icon="⧖" />
        <SidebarItem icon="⚙" />
        <div className="mt-auto">
          <SidebarItem icon="⏻" />
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col relative overflow-y-auto">
        {/* DASHBOARD TOPBAR */}
        <div className="h-20 flex items-center justify-between px-10 border-b border-white/5 jk-glass sticky top-0 z-40">
          <div className="flex flex-col">
            <span className="jk-hud-heading text-neo-accent text-xs">Command Center</span>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em]">SYSTEM_VERSION_2.0.4 // LOCAL_HOST</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-xl font-mono text-white font-bold tracking-tighter">{time}</span>
              <span className="text-[9px] text-white/20 uppercase tracking-widest font-bold">Universal Time Standard</span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <NeoButton variant="outline" size="sm" onClick={() => setView('showcase')}>
              EXIT TO SHOWCASE
            </NeoButton>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* TOP METRICS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <NeoCard title="Energy Output" value={`${metrics.energy.toFixed(2)}`} className="py-4 px-6 scale-[0.95]" trend={{ value: '+4.2%', direction: 'up' }} />
            <NeoCard title="Active Segments" value="84" className="py-4 px-6 scale-[0.95]" trend={{ value: 'STABLE', direction: 'neutral' }} />
            <NeoCard title="Node Density" value={`${(metrics.nodes / 10).toFixed(1)}%`} className="py-4 px-6 scale-[0.95]" trend={{ value: '-0.8%', direction: 'down' }} />
            <NeoCard title="Pulse Speed" value="2.1ms" className="py-4 px-6 scale-[0.95]" trend={{ value: '+0.1', direction: 'up' }} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 h-full">
            {/* CENTRAL NEURAL MAP */}
            <div className="xl:col-span-2 space-y-6">
              <NeoCard title="Dynamic Neural Topology" className="h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-[80%] h-[80%] border-2 border-neo-accent/20 rounded-full animate-pulse" />
                  <div className="absolute w-[60%] h-[60%] border border-neo-accent/10 rounded-full" />
                </div>
                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                      <div className="p-4 border border-white/5 rounded-lg jk-glass">
                         <div className="jk-data-label text-neo-accent mb-1">Grid Coordinates</div>
                         <div className="text-lg font-mono text-white tracking-widest">34.09 // 118.24</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        <span className="jk-data-label text-green-500">Live_Stream</span>
                      </div>
                   </div>
                   
                   <div className="flex justify-center items-center py-20">
                      <div className="relative">
                        <div className="absolute -inset-20 bg-neo-accent/5 rounded-full blur-3xl animate-pulse" />
                        <div className="text-8xl font-black text-white/5 tracking-tighter select-none">NEURAL_MAP</div>
                      </div>
                   </div>

                   <div className="flex gap-4 p-4 border-t border-white/5">
                      <div className="flex-1">
                        <div className="jk-data-label mb-2">Propagation Field</div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-neo-accent shadow-neon-primary" style={{ width: '65%' }} />
                        </div>
                      </div>
                   </div>
                </div>
              </NeoCard>
            </div>

            {/* SYSTEM LOGS / ACTIVITY */}
            <div className="space-y-6">
              <NeoCard title="System Activity Feed" className="h-full">
                 <div className="space-y-2 mt-4">
                    <ActivityItem title="Neural Handshake Verified" time="14:02:11" status="success" />
                    <ActivityItem title="Energy Spike Detected (Sector 7)" time="14:01:45" status="warning" />
                    <ActivityItem title="Kernel Optimization Complete" time="13:58:20" status="success" />
                    <ActivityItem title="Pulse Buffer Reallocated" time="13:55:12" />
                    <ActivityItem title="External Request Blocked" time="13:52:01" status="warning" />
                    <ActivityItem title="Heartbeat Sync Optimal" time="13:48:59" status="success" />
                    <ActivityItem title="User Session Initiated" time="13:45:33" />
                 </div>
                 <div className="mt-8 p-4 jk-glass rounded-xl border-neo-accent/20">
                    <div className="jk-hud-heading text-neo-accent text-[9px] mb-2">Security Override</div>
                    <NeoButton variant="primary" size="sm" className="w-full">Request Auth</NeoButton>
                 </div>
              </NeoCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <NeoLayout showScanlines={true}>
      <style>{`
        .fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      {view === 'showcase' ? renderShowcase() : renderDashboard()}
    </NeoLayout>
  );
}

export default App;
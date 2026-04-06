import React, { useState, useEffect } from 'react';
import { V2 } from 'jeikei-design-system';

const { NeoLayout, NeoButton, NeoCard, NeuralBackground, useSystem } = V2;

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
      <div className="flex gap-10 items-center">
         <div className="flex flex-col items-end">
            <span className="jk-data-label opacity-40">CORE_ENERGY</span>
            <span className="text-neo-accent font-mono text-xs">
               {(metrics.energy * 10).toFixed(3)} EV
            </span>
         </div>
         <div className="flex flex-col items-end">
            <span className="jk-data-label opacity-40">ACTIVE_PULSES</span>
            <span className="text-neo-magenta font-mono text-xs">
               {metrics.pulses}
            </span>
         </div>
      </div>
   );
};

function App() {
   const { engine } = useSystem();

   const emitCenterPulse = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      engine?.emitPulse(
         rect.left + rect.width / 2,
         rect.top + rect.height / 2
      );
   };

   return (
      <NeoLayout>
         {/* 🔥 BACKGROUND GLOBAL */}
         <div className="fixed inset-0 -z-10">
            <NeuralBackground />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
         </div>

         <div className="space-y-16 relative z-10">

            {/* HERO */}
            <div className="flex flex-col items-center text-center space-y-6 py-16">
               <h1 className="text-7xl font-black tracking-[0.3em] text-neo-accent drop-shadow-[0_0_40px_var(--neo-glow)]">
                  JEIKEI
               </h1>

               <p className="jk-data-label text-neo-muted max-w-xl opacity-60">
                  Living Neural Interface · Real-time Graph Propagation System
               </p>

               <div className="flex gap-4 pt-6">
                  <NeoButton size="lg" onClick={emitCenterPulse}>
                     Initialize System
                  </NeoButton>
                  <ThemeToggler />
               </div>

               <SystemHUD />
            </div>

            {/* METRICS */}
            <div className="grid md:grid-cols-4 gap-6">
               <NeoCard title="Node Density" value="1,402" />
               <NeoCard title="Latency" value="0.4ms" />
               <NeoCard title="Stability" value="99.9%" />
               <NeoCard title="Uptime" value="∞" />
            </div>

            {/* MAIN */}
            <div className="grid lg:grid-cols-3 gap-8">

               <NeoCard title="Neural Parameters">
                  <div className="space-y-6">

                     <div>
                        <div className="flex justify-between text-xs">
                           <span>Propagation</span>
                           <span className="text-neo-accent">5 Hops</span>
                        </div>
                        <div className="h-[2px] bg-white/10 mt-2">
                           <div className="h-full w-full bg-neo-accent shadow-neon-primary" />
                        </div>
                     </div>

                     <div>
                        <div className="flex justify-between text-xs">
                           <span>Decay</span>
                           <span className="text-neo-magenta">0.08</span>
                        </div>
                        <div className="h-[2px] bg-white/10 mt-2">
                           <div className="h-full w-[40%] bg-neo-magenta shadow-neon-magenta" />
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-3 pt-4">
                        <NeoButton variant="outline" onClick={emitCenterPulse}>
                           Purge
                        </NeoButton>
                        <NeoButton variant="outline" onClick={emitCenterPulse}>
                           Sync
                        </NeoButton>
                     </div>

                  </div>
               </NeoCard>

               <NeoCard title="Event Stream" className="lg:col-span-2">
                  <div className="font-mono text-[10px] space-y-1 opacity-80">
                     {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="border-b border-white/5 py-2 hover:bg-white/5 transition">
                           [{new Date().toLocaleTimeString()}] SIGNAL_PROPAGATED_NODE_{i}
                        </div>
                     ))}
                  </div>
               </NeoCard>
            </div>

            {/* INTERACTION ZONE */}
            <div className="jk-glass rounded-[var(--neo-radius)] border border-white/10 p-16 text-center relative overflow-hidden group">

               {/* glow hover */}
               <div className="absolute inset-0 bg-neo-accent/[0.03] opacity-0 group-hover:opacity-100 transition duration-1000" />

               <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl jk-hud-heading">Neural Interaction</h2>

                  <p className="jk-data-label opacity-40 max-w-md mx-auto">
                     Trigger propagation waves across the neural mesh.
                  </p>

                  <div className="flex justify-center gap-6 pt-4">
                     <NeoButton size="lg" onClick={emitCenterPulse}>
                        Pulse Wave
                     </NeoButton>

                     <NeoButton variant="outline" size="lg" onClick={emitCenterPulse}>
                        Force Sync
                     </NeoButton>
                  </div>
               </div>
            </div>

         </div>
      </NeoLayout>
   );
}

export default App;
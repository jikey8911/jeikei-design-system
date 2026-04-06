import React from 'react';
import { V2, cx } from 'jeikei-design-system';

const { NeoLayout, NeoButton, NeoCard, NeoInput } = V2;

function App() {
  return (
    <NeoLayout showScanlines={true}>
      <div className="max-w-[1200px] mx-auto space-y-10 py-12">
        
        {/* CENTERED LOGO */}
        <div className="flex flex-col items-center justify-center space-y-1 mb-16">
          <div className="text-4xl font-black tracking-[0.4em] text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            JEIKEI
          </div>
          <div className="text-[10px] tracking-[0.8em] text-white/50 uppercase ml-2">
            DESIGN SYSTEM
          </div>
        </div>

        {/* TOP ROW: BUTTONS & INPUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <NeoCard title="NeoButton">
              <div className="flex gap-4 pt-2">
                 <NeoButton variant="primary" size="sm">Primary</NeoButton>
                 <NeoButton variant="secondary" size="sm">Secondary</NeoButton>
                 <NeoButton variant="outline" size="sm">Outline</NeoButton>
              </div>
           </NeoCard>

           <NeoCard title="NeoInput">
              <div className="pt-2">
                 <NeoInput placeholder="Type here..." />
              </div>
           </NeoCard>
        </div>

        {/* MIDDLE ROW: LARGE BUTTON */}
        <div className="flex justify-start">
           <NeoButton variant="primary" size="lg" className="w-[300px] py-5 text-lg">
             NeoButton
           </NeoButton>
        </div>

        {/* BOTTOM ROW: THREE METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <NeoCard title="NeoCard">
              <div className="space-y-4 pt-2">
                 <div className="jk-data-label text-white/40 text-[11px] tracking-widest">Users Online</div>
                 <div className="text-5xl font-bold tracking-tighter text-neo-accent">1,250</div>
              </div>
           </NeoCard>

           <NeoCard title="NeoCard">
              <div className="space-y-4 pt-2">
                 <div className="jk-data-label text-white/40 text-[11px] tracking-widest">Revenue</div>
                 <div className="text-5xl font-bold tracking-tighter text-neo-accent">$32,400</div>
              </div>
           </NeoCard>

           <NeoCard title="NeoCard">
              <div className="space-y-4 pt-2">
                 <div className="jk-data-label text-white/40 text-[11px] tracking-widest">CPU Usage</div>
                 <div className="text-5xl font-bold tracking-tighter text-neo-accent">62%</div>
              </div>
           </NeoCard>
        </div>

        {/* FOOTER SECTION: NEURAL GRID BG */}
        <div className="space-y-6">
           <div className="jk-hud-heading text-white/60 tracking-[0.2em] text-sm">Neural Grid Background</div>
           <div className="w-full h-[400px] jk-glass border-white/5 rounded-[var(--neo-radius)] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="jk-data-label opacity-10 text-[10px] tracking-[1em]">SYSTEM_GRID_ACTIVE</span>
              </div>
           </div>
        </div>

      </div>
    </NeoLayout>
  );
}

export default App;
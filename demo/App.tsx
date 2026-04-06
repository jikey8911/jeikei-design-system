import React from 'react';
import { 
  NeonButton, 
  NeonCard, 
  NeonInput, 
  NeuralGrid, 
  StatCard, 
  ProgressRing 
} from '../src';

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-mono overflow-x-hidden">
      {/* Background Neural Grid */}
      <div className="fixed inset-0 z-0">
        <NeuralGrid 
          sparkles={true} 
          intensity={0.4}
          color="#00ff9c"
        />
      </div>

      <div className="relative z-10 container mx-auto p-8 space-y-12">
        <header className="border-b border-neon/20 pb-6 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter text-neon glow-neon mb-2">
            JEIKEI NEURAL DESIGN SYSTEM
          </h1>
          <p className="text-white/50 text-sm">VITE 7 // PNPM READY // MISSION CONTROL READY</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="SYSTEM STATUS" 
            value="OPTIMAL" 
            trend="+12%" 
            icon="Activity"
          />
          <StatCard 
            title="NEURAL LOAD" 
            value="42%" 
            trend="-5%" 
            icon="Cpu"
          />
          <StatCard 
            title="CORE TEMP" 
            value="34°C" 
            trend="STABLE" 
            icon="Thermometer"
          />
          <StatCard 
            title="LATENCY" 
            value="14ms" 
            trend="-2ms" 
            icon="Signal"
          />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NeonCard title="Interactive Components">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <NeonButton variant="primary">PRIMARY ACTION</NeonButton>
                  <NeonButton variant="outline">SECONDARY ACTION</NeonButton>
                  <NeonButton variant="ghost">GHOST ACTION</NeonButton>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <NeonInput 
                    label="SYSTEM ACCESS" 
                    placeholder="Enter credentials..." 
                    icon="Shield"
                  />
                  <NeonInput 
                    label="SEARCH NETWORK" 
                    placeholder="Scanning nodes..." 
                    icon="Search"
                  />
                </div>
              </div>
            </NeonCard>
          </div>

          <div className="space-y-6">
            <NeonCard title="Core Power">
              <div className="flex flex-col items-center justify-center py-4">
                <ProgressRing 
                  value={75} 
                  size={160} 
                  strokeWidth={12} 
                  color="#00ff9c"
                  label="CORE"
                />
              </div>
            </NeonCard>
          </div>
        </section>

        <footer className="text-center py-12 text-white/20 text-xs tracking-widest border-t border-white/5">
          © 2026 JEIKEI NEURAL SYSTEMS - ALL RIGHTS RESERVED
        </footer>
      </div>
    </div>
  );
}

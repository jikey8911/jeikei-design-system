import React from 'react';
import { NeuralProvider } from '../system/NeuralProvider';
import { NeuralBackground } from '../neural/NeuralBackground';
import '../styles/globals.css';
import '../styles/effects.css';

export interface NeoLayoutProps {
  children: React.ReactNode;
  showScanlines?: boolean;
}

export const NeoLayout: React.FC<NeoLayoutProps> = ({ children, showScanlines = true }) => {
  return (
    <div className="jk-layout-v2 relative min-h-screen bg-black text-white font-outfit selection:bg-neo-accent selection:text-black">
      {/* Global HUD Layer */}
      {showScanlines && <div className="jk-scanline" />}
      
      {/* Neural Simulation Layer */}
      <NeuralBackground />
      
      {/* Global HUD Frame */}
      <div className="fixed inset-0 pointer-events-none border-[1px] border-white/5 z-[99]" />
      
      {/* Main Content Scroll Area */}
      <div className="relative z-10">
        {/* Default HUD Header */}
        <header className="sticky top-0 z-50 w-full px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="jk-hud-heading text-neo-accent">JK_SYSTEM_v2.0</span>
            <div className="flex gap-2 items-center">
              <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
              <span className="jk-data-label opacity-40">PROTOCOL_LIVING_INTERFACE_ACTIVE</span>
            </div>
          </div>
          
          <div className="flex gap-6 items-center">
             {/* Metrics can be injected here */}
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] p-8 min-h-[calc(100vh-80px)]">
          {children}
        </main>
        
        {/* Footer Hudson */}
        <footer className="w-full px-8 py-4 border-t border-white/5 flex justify-between items-center">
           <span className="jk-data-label opacity-30">© 2026 JEIKEI_LABS // ALL_SYSTEMS_GO</span>
           <div className="flex gap-4">
             <span className="jk-data-label text-cyan-500/40">LATENCY: 12ms</span>
             <span className="jk-data-label text-magenta-500/40">THROUGHPUT: 4.8gbps</span>
           </div>
        </footer>
      </div>
    </div>
  );
};

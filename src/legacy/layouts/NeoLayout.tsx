import { NeuralGrid } from '../neural/NeuralGrid';

interface NeoLayoutProps {
  children: React.ReactNode;
}

export const NeoLayout: React.FC<NeoLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-neo-bg text-neo-text overflow-hidden font-outfit">
      {/* Background Layer */}
      <NeuralGrid preset="nebula" className="opacity-40" />
      
      {/* Scanline Overlay */}
      <div className="scanlines-overlay pointer-events-none" />

      {/* Global Status HUD */}
      <div className="fixed top-8 left-10 z-50 flex items-center gap-2 pointer-events-none opacity-30">
        <div className="w-1.5 h-1.5 rounded-full bg-neo-accent animate-pulse shadow-neon-cyan" />
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Neural Sync: Active</span>
      </div>

      <div className="fixed bottom-8 right-10 z-50 flex flex-col items-end gap-1 pointer-events-none opacity-30 font-mono">
        <span className="text-[8px] uppercase tracking-[0.3em] font-medium">Core Integrity // 99.8%</span>
        <span className="text-[8px] uppercase tracking-[0.3em] font-medium text-neo-magenta">Signal Strength // Optimized</span>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 px-10 py-16 min-h-screen">
        {children}
      </div>
    </div>
  );
};


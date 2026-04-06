import React from 'react';
import { SystemProvider } from '../system/SystemProvider';
import { useSystem } from '../system/SystemContext';
import { NeuralBackground } from '../neural/NeuralBackground';
import '../styles/globals.css';
import '../styles/effects.css';

export interface NeoLayoutProps {
  children: React.ReactNode;
  showScanlines?: boolean;
}

// Inner layout that consumes SystemContext (must be inside provider)
const NeoLayoutInner: React.FC<NeoLayoutProps> = ({ children, showScanlines = true }) => {
  useSystem(); // Ensures we're inside a provider — will throw if missing

  return (
    <div className="jk-layout-v2 relative min-h-screen bg-transparent text-white font-outfit selection:bg-neo-accent selection:text-black">
      {/* Neural Background — fullscreen WebGL layer */}
      <NeuralBackground />

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0" />

      {/* Scanlines overlay */}
      {showScanlines && <div className="jk-scanline" />}

      {/* Global HUD frame border */}
      <div className="fixed inset-0 pointer-events-none border-[1px] border-white/5 z-[99]" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

/**
 * NeoLayout — Self-contained layout with Neural Engine + Glass UI system.
 *
 * Wraps children in SystemProvider automatically so consumers don't need to
 * manually add it. If you already have a SystemProvider higher in the tree,
 * use NeoLayoutInner directly to avoid double provider.
 *
 * Usage:
 *   <NeoLayout>
 *     <YourApp />
 *   </NeoLayout>
 */
export const NeoLayout: React.FC<NeoLayoutProps> = ({ children, showScanlines = true }) => {
  return (
    <SystemProvider>
      <NeoLayoutInner showScanlines={showScanlines}>
        {children}
      </NeoLayoutInner>
    </SystemProvider>
  );
};

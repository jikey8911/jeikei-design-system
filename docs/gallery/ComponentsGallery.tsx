import React, { useState } from 'react';
import {
  NeuralGrid,
  GlassCard,
  NeonButton,
  NeonInput,
  StatCard,
  ProgressRing,
  Tabs,
  DataGrid,
  Modal,
  Toast,
  ActivityIcon,
  CommandIcon,
  ShieldIcon,
  TerminalIcon
} from '../../src';
import { useNeuralSystem } from '../../src/hooks/useNeuralSystem';

export const ComponentsGallery = () => {
  useNeuralSystem(true);
  const [activeTab, setActiveTab] = useState('surfaces');
  const [isModalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-black text-[#00ff9c] uppercase tracking-tighter border-l-4 border-[#00ff9c] pl-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#05070a] text-white relative overflow-hidden font-sans pb-20">
      <NeuralGrid sparkles={true} />

      <div className="relative z-10 p-8 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-6xl font-black text-[#00ff9c] tracking-tighter uppercase">
            Neural Components Gallery
          </h1>
          <p className="text-[rgba(0,255,156,0.5)] font-mono text-sm tracking-[0.4em]">
            SYSTEM_VERSION: 2.0.0 // FULL_MANIFEST_ACTIVE
          </p>
          <div className="pt-6">
             <a href="../index.html" className="text-[#00ffe1] hover:underline font-mono text-xs tracking-widest">[ BACK_TO_HOME ]</a>
          </div>
        </header>

        {/* Surfaces & Buttons */}
        <Section title="Surfaces & Interaction">
          <GlassCard className="flex flex-col gap-4">
             <h3 className="text-sm font-mono text-cyan-400">GlassCard Standard</h3>
             <p className="text-xs text-white/60">Glassmorphism effect with blur and neon border.</p>
             <NeonButton onClick={() => setShowToast(true)}>Default Button</NeonButton>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4">
             <h3 className="text-sm font-mono text-cyan-400">Buttons Variants</h3>
             <NeonButton variant="secondary">Secondary Neon</NeonButton>
             <NeonButton variant="ghost">Ghost Terminal</NeonButton>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4">
             <h3 className="text-sm font-mono text-cyan-400">Inputs & Interaction</h3>
             <NeonInput label="Neural ID" placeholder="SCAN_ENTITY..." />
             <NeonInput label="Access Level" placeholder="SECURE_INPUT" error="AUTHENTICATION_REQUIRED" />
          </GlassCard>
        </Section>

        {/* Feedback & Data */}
        <Section title="Feedback & Visuals">
          <StatCard title="Sync Intensity" value="94.8%" trend="up" trendValue="1.2%" />
          <StatCard title="Active Sparks" value="1,204" subtitle="NEURAL_LOAD: STABLE" />

          <GlassCard className="flex flex-col items-center justify-center p-8">
             <h3 className="text-sm font-mono text-[#00ff9c] mb-4 self-start">Integration Progress</h3>
             <ProgressRing value={65} size={140} />
          </GlassCard>
        </Section>

        {/* Navigation & Modals */}
        <Section title="Navigation & Feedback Systems">
           <div className="lg:col-span-2">
             <GlassCard>
                <Tabs
                  activeTab={activeTab}
                  onChange={setActiveTab}
                  tabs={[
                    { id: 'surfaces', label: 'Surfaces', content: <p className="text-sm font-mono py-4">GlassPanel components with dynamic shadows.</p> },
                    { id: 'data', label: 'Data', content: <p className="text-sm font-mono py-4">Encrypted grids and status tables.</p> },
                    { id: 'visuals', label: 'Visuals', content: <p className="text-sm font-mono py-4">Progress rings and neural background controls.</p> }
                  ]}
                />
             </GlassCard>
           </div>

           <GlassCard className="flex flex-col gap-6 items-center justify-center">
             <h3 className="text-sm font-mono text-cyan-400 self-start uppercase">Dialog Systems</h3>
             <NeonButton onClick={() => setModalOpen(true)} variant="secondary" className="w-full">Open Modal</NeonButton>
             <NeonButton onClick={() => setShowToast(true)} variant="ghost" className="w-full">Trigger Toast</NeonButton>
           </GlassCard>
        </Section>

        {/* Icons */}
        <Section title="Neural Icons Collection">
           <GlassCard className="flex justify-around items-center py-10 lg:col-span-3">
             <div className="flex flex-col items-center gap-2"><ActivityIcon size={32} /><span className="text-[10px] font-mono opacity-50">Activity</span></div>
             <div className="flex flex-col items-center gap-2"><CommandIcon size={32} /><span className="text-[10px] font-mono opacity-50">Command</span></div>
             <div className="flex flex-col items-center gap-2"><ShieldIcon size={32} /><span className="text-[10px] font-mono opacity-50">Shield</span></div>
             <div className="flex flex-col items-center gap-2"><TerminalIcon size={32} /><span className="text-[10px] font-mono opacity-50">Terminal</span></div>
           </GlassCard>
        </Section>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="System Protocol 11-A">
         <div className="space-y-4">
            <p className="text-sm font-mono text-[#00ff9c]/70">This is a system-wide broadcast of the neural component manifest. All interfaces are operational.</p>
            <NeonButton className="w-full" onClick={() => setModalOpen(false)}>Acknowledge</NeonButton>
         </div>
      </Modal>

      {showToast && (
        <div className="fixed bottom-10 right-10 z-50">
          <Toast message="NEURAL_MANIFEST_LOADED // SUCCESS" type="success" onClose={() => setShowToast(false)} />
        </div>
      )}
    </div>
  );
};

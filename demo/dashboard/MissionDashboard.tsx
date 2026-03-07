import React from 'react';
import {
  StatCard,
  ProgressRing,
  GlassCard,
  NeonButton,
  NeonInput,
  Tabs,
  DataGrid,
  NeuralGrid,
  Modal,
  Toast
} from '../../src';
import { ActivityIcon, CommandIcon, ShieldIcon, TerminalIcon } from '../../src/components/icons';
import { useNeuralSystem } from '../../src/hooks/useNeuralSystem';

export const MissionDashboard = () => {
  useNeuralSystem(true);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);

  const mockData = [
    { id: 1, agent: 'PHOENIX-01', status: 'ACTIVE', task: 'GRID_OPTIMIZATION', progress: '87%' },
    { id: 2, agent: 'NOVA-04', status: 'STANDBY', task: 'NEURAL_LINK', progress: '100%' },
    { id: 3, agent: 'VIPER-09', status: 'DEPLOYED', task: 'KERNEL_RECON', progress: '34%' },
  ];

  const columns = [
    { header: 'AGENT_ID', key: 'agent' as const },
    { header: 'STATUS', key: 'status' as const, render: (v: string) => (
      <span className={v === 'ACTIVE' ? 'text-[#00ff9c]' : 'text-cyan-400 opacity-60'}>● {v}</span>
    )},
    { header: 'CURRENT_TASK', key: 'task' as const },
    { header: 'COMPLETION', key: 'progress' as const },
  ];

  return (
    <div className="min-h-screen bg-[#05070a] text-white relative overflow-hidden font-sans">
      <NeuralGrid sparkles={true} />

      {/* Sidebar Simulation */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 border-r border-[rgba(0,255,156,0.1)] bg-black/40 backdrop-blur-xl z-20 flex flex-col items-center py-10 space-y-8">
        <CommandIcon size={32} />
        <div className="flex flex-col gap-6 pt-10">
          <button className="hover:scale-110 transition-transform"><ActivityIcon color="#00ff9c" /></button>
          <button className="hover:scale-110 transition-transform"><ShieldIcon color="rgba(0,255,156,0.4)" /></button>
          <button className="hover:scale-110 transition-transform"><TerminalIcon color="rgba(0,255,156,0.4)" /></button>
        </div>
      </aside>

      <div className="relative z-10 pl-28 pr-8 py-8 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[rgba(0,255,156,0.1)] pb-6">
          <div>
            <h1 className="text-4xl font-black text-[#00ff9c] tracking-tighter uppercase flex items-center gap-3">
              <ActivityIcon size={32} /> Mission Control
            </h1>
            <p className="text-[rgba(0,255,156,0.5)] font-mono text-xs tracking-[0.3em] mt-1">
              SYSTEM STATUS: OPTIMAL // ENCRYPTED SESSION
            </p>
          </div>
          <div className="flex gap-4">
            <NeonInput placeholder="SEARCH SYSTEM..." className="w-64" />
            <NeonButton onClick={() => setModalOpen(true)}>NEW MISSION</NeonButton>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Total Nodes" value="14,204" trend="up" trendValue="12%" />
          <StatCard title="Active Pulses" value="892" subtitle="STABLE LOAD" />
          <StatCard title="Neural Sync" value="98.2%" trend="up" trendValue="0.4%" />
          <StatCard title="Uptime" value="342d" subtitle="NO FAULTS DETECTED" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <GlassCard className="lg:col-span-2 space-y-6">
            <Tabs
              activeTab={activeTab}
              onChange={setActiveTab}
              tabs={[
                { id: 'overview', label: 'Overview', content: (
                  <div className="space-y-6">
                    <h3 className="text-[#00ff9c] font-mono text-sm uppercase flex items-center gap-2">
                      <TerminalIcon size={16} /> Active Agent Network
                    </h3>
                    <DataGrid data={mockData} columns={columns} />
                  </div>
                )},
                { id: 'network', label: 'Network Data', content: <p className="text-cyan-200/60 font-mono">[REDACTED] Encrypted network stream active...</p> }
              ]}
            />
          </GlassCard>

          <GlassCard className="flex flex-col items-center justify-center py-10 space-y-6">
            <h3 className="text-[#00ff9c] font-mono text-sm uppercase self-start">System Integration</h3>
            <ProgressRing value={78} size={180} />
            <div className="text-center">
              <p className="text-xs text-[rgba(0,255,156,0.5)] uppercase tracking-widest">Neural Linkage</p>
              <p className="text-xl font-bold text-cyan-300">CORE_SYNC_ACTIVE</p>
            </div>
            <NeonButton variant="secondary" className="w-full" onClick={() => setShowToast(true)}>OPTIMIZE CORE</NeonButton>
          </GlassCard>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Initialize New Mission"
      >
        <div className="space-y-4">
          <p className="text-sm text-[rgba(0,255,156,0.7)] font-mono">
            WARNING: Initializing a new mission will allocate core neural resources. Confirm clearance level 5.
          </p>
          <NeonInput label="Mission Codename" placeholder="e.g. PROJECT_JEIKEI" />
          <div className="flex gap-4 pt-4">
            <NeonButton className="flex-1" onClick={() => setModalOpen(false)}>CONFIRM</NeonButton>
            <NeonButton variant="ghost" className="flex-1" onClick={() => setModalOpen(false)}>CANCEL</NeonButton>
          </div>
        </div>
      </Modal>

      {showToast && (
        <div className="fixed bottom-8 right-8 z-50">
          <Toast
            message="SYSTEM_OPTIMIZATION_COMPLETE // 142ms"
            type="success"
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </div>
  );
};

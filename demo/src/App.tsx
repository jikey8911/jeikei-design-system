import React, { useState, useEffect } from 'react';
import { 
  NeoLayout, 
  NeoButton, 
  NeoCard, 
  NeoPanel, 
  NeoGrid 
} from 'jeikei-design-system';

// Custom hook for "Living Interface" metrics
const useSystemMetrics = () => {
  const [metrics, setMetrics] = useState({
    cpu: 62.4,
    latency: 14,
    load: 78,
    signal: 91,
    latencyTrend: true,
    cpuTrend: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        cpu: +(62 + Math.random() * 3).toFixed(1),
        latency: Math.floor(12 + Math.random() * 5),
        load: Math.floor(75 + Math.random() * 10),
        signal: Math.floor(88 + Math.random() * 6),
        latencyTrend: Math.random() > 0.5,
        cpuTrend: Math.random() > 0.4
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return metrics;
};

export default function App() {
  const { cpu, latency, load, signal, latencyTrend, cpuTrend } = useSystemMetrics();

  return (
    <NeoLayout>
      <div className="max-w-7xl mx-auto space-y-10 font-outfit">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
          <div>
            <h1 className="text-6xl font-bold tracking-tighter text-neo-text drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
              JEIKEI <span className="text-neo-accent">OS</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.5em] text-neo-muted mt-3 font-bold opacity-70">
              Neural Network Management Interface // STABLE BUILD 2.0.4
            </p>
          </div>
          
          <div className="flex gap-4">
            <NeoButton variant="primary" className="h-11 px-10">Sync System</NeoButton>
            <NeoButton variant="secondary" className="h-11 px-10">Diagnostics</NeoButton>
          </div>
        </div>

        {/* Metrics Grid */}
        <NeoGrid columns={{ base: 1, md: 2, lg: 4 }} gap="md">
          <NeoCard 
            title="CPU Usage" 
            value={cpu} 
            unit="%" 
            trend={{ value: '2.4%', up: cpuTrend }} 
          />
          <NeoCard 
            title="Net Latency" 
            value={latency} 
            unit="ms" 
            variant="magenta"
            trend={{ value: '2ms', up: !latencyTrend }} 
          />
          <NeoCard 
            title="Neural Load" 
            value={load} 
            unit="tps" 
            trend={{ value: '12%', up: true }} 
          />
          <NeoCard 
            title="Signal" 
            value={signal} 
            unit="dbm" 
            trend={{ value: 'Optimal', up: true }} 
          />
        </NeoGrid>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-3 gap-8">
          <NeoPanel title="Input Matrix" className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-sm text-neo-muted leading-relaxed max-w-2xl font-medium">
                The neural grid is currently operating at <span className="text-neo-accent font-mono font-bold uppercase tracking-widest text-[11px]">OPTIMAL</span> capacity. 
                All nodes are synced with the global pulse. Interaction waves are enabled for all user events.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <NeoButton variant="outline">Reset Nodes</NeoButton>
                <NeoButton variant="outline">Purge Cache</NeoButton>
                <NeoButton variant="outline">Re-Route</NeoButton>
                <NeoButton variant="ghost">Advanced...</NeoButton>
              </div>
            </div>
          </NeoPanel>

          <NeoPanel title="Active Threads" subdued>
            <div className="space-y-4 font-mono">
              {[
                { id: 'TX-902', status: 'ACTIVE', color: 'text-neo-accent' },
                { id: 'KB-114', status: 'SYNCED', color: 'text-neo-accent' },
                { id: 'QM-772', status: 'OVERLOAD', color: 'text-neo-magenta' },
                { id: 'LR-009', status: 'IDLE', color: 'text-neo-muted' },
              ].map(thread => (
                <div key={thread.id} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                  <span className="text-[10px] text-white/50 font-bold">ID: {thread.id}</span>
                  <span className={`text-[10px] font-bold tracking-widest ${thread.color}`}>{thread.status}</span>
                </div>
              ))}
            </div>
          </NeoPanel>
        </div>
      </div>
    </NeoLayout>
  );
}

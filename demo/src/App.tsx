import {
  NeoBadge,
  NeoButton,
  NeoCard,
  NeoGrid,
  NeoInput,
  NeoModal,
  NeoPanel,
  NeoTabs,
  NeoTable,
  NeoToast,
  NeuralGrid,
  useHover,
  useKeyboardPulse,
} from 'jeikei-design-system';
import React from 'react';

const tableData = [
  { id: 'alpha', status: 'Online', load: '42%', latency: '18ms' },
  { id: 'beta', status: 'Degraded', load: '73%', latency: '32ms' },
  { id: 'gamma', status: 'Offline', load: '0%', latency: '—' },
];

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [pulseKey, setPulseKey] = React.useState('');
  const { hovered, bind } = useHover();

  useKeyboardPulse({ onPulse: (k) => setPulseKey(k) });

  const tabs = [
    { id: 'components', label: 'Components', content: <ComponentShowcase onOpenModal={() => setModalOpen(true)} /> },
    { id: 'dashboard', label: 'Dashboard', content: <DashboardView /> },
  ];

  return (
    <div className="min-h-screen bg-neo-bg text-neo-text relative overflow-hidden">
      <NeuralGrid className="pointer-events-none" density={0.5} speed={1} interactive />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neo-muted">Neural UI // JeiKei</p>
            <h1 className="text-4xl font-black tracking-tight">Design System Demo</h1>
          </div>
          <NeoBadge variant="accent" glow>
            Vite 7 + Tailwind
          </NeoBadge>
        </header>

        <NeoTabs tabs={tabs} defaultValue="components" />

        <div className="flex items-center gap-3" {...bind}>
          <NeoToast
            message="Keyboard Pulse Listener"
            description={`Last key: ${pulseKey || '—'} | Hover: ${hovered ? 'yes' : 'no'}`}
            variant="info"
          />
        </div>
      </div>

      <NeoModal
        open={modalOpen}
        title="Neural Modal"
        onClose={() => setModalOpen(false)}
        footer={
          <>
            <NeoButton variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </NeoButton>
            <NeoButton glow onClick={() => setModalOpen(false)}>
              Confirm
            </NeoButton>
          </>
        }
      >
        This modal rides on top of the neural grid. Keyboard pulses will ripple through the system.
      </NeoModal>
    </div>
  );
}

const ComponentShowcase: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  return (
    <NeoGrid gap="lg" columns={{ base: 1, md: 2 }}>
      <NeoCard title="Buttons" description="Variants + glow + sizes">
        <div className="flex flex-wrap gap-3">
          <NeoButton glow>Primary</NeoButton>
          <NeoButton variant="secondary">Secondary</NeoButton>
          <NeoButton variant="outline">Outline</NeoButton>
          <NeoButton variant="ghost">Ghost</NeoButton>
          <NeoButton variant="danger">Danger</NeoButton>
        </div>
      </NeoCard>

      <NeoCard title="Inputs" description="With helper and error">
        <div className="space-y-3">
          <NeoInput label="Callsign" placeholder="AR-42" helperText="Neural authenticated" />
          <NeoInput label="Access Key" type="password" error="Key mismatch" />
        </div>
      </NeoCard>

      <NeoCard title="Badges & Toast" description="Status chips">
        <div className="flex flex-wrap gap-2">
          <NeoBadge variant="accent" glow>
            Active
          </NeoBadge>
          <NeoBadge variant="success">Stable</NeoBadge>
          <NeoBadge variant="warning">Warning</NeoBadge>
          <NeoBadge variant="danger">Critical</NeoBadge>
        </div>
      </NeoCard>

      <NeoCard title="Modal" description="Glass + glow" footer={<NeoButton onClick={onOpenModal}>Open Modal</NeoButton>}>
        Trigger a modal with neon styling and keyboard traps.
      </NeoCard>
    </NeoGrid>
  );
};

const DashboardView = () => {
  return (
    <div className="space-y-6">
      <NeoPanel
        title="Neural Operations"
        actions={
          <>
            <NeoButton size="sm" variant="outline">
              Calibrate
            </NeoButton>
            <NeoButton size="sm" glow>
              Pulse
            </NeoButton>
          </>
        }
      >
        <NeoGrid columns={{ base: 1, md: 3 }} gap="md">
          <StatCard label="Active Nodes" value="128" delta="+6" />
          <StatCard label="Signal Coherence" value="93%" delta="+2.1%" />
          <StatCard label="Latency" value="14ms" delta="-1.2ms" />
        </NeoGrid>
      </NeoPanel>

      <NeoPanel title="Transmission Log">
        <NeoTable
          columns={[
            { key: 'id', header: 'Node' },
            { key: 'status', header: 'Status' },
            { key: 'load', header: 'Load', align: 'right' },
            { key: 'latency', header: 'Latency', align: 'right' },
          ]}
          data={tableData}
        />
      </NeoPanel>
    </div>
  );
};

const StatCard = ({ label, value, delta }: { label: string; value: string; delta: string }) => (
  <div className="glass-surface border border-white/5 rounded-neo-lg p-5">
    <p className="text-sm text-neo-muted uppercase tracking-[0.2em]">{label}</p>
    <p className="text-3xl font-black mt-2">{value}</p>
    <p className="text-xs text-neo-accent mt-1">Δ {delta}</p>
  </div>
);

export default App;

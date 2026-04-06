import { NeoLayout, NeoButton, NeoCard, NeoInput, NeuralBackground } from "jeikei-design-system";

const Gallery = () => (
  <div className="space-y-6">
    <div className="glass rounded-2xl border border-cyan-400/20 p-6 space-y-4 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
      <h2 className="text-lg text-cyan-200">NeoButton</h2>
      <div className="flex flex-wrap gap-3">
        <NeoButton>Primary</NeoButton>
        <NeoButton variant="secondary">Secondary</NeoButton>
        <NeoButton variant="outline">Outline</NeoButton>
      </div>
    </div>

    <div className="glass rounded-2xl border border-cyan-400/20 p-6 space-y-4 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
      <h2 className="text-lg text-cyan-200">NeoInput</h2>
      <NeoInput placeholder="Type here..." />
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <NeoCard title="Users Online" value="1,250" />
      <NeoCard title="Revenue" value="$32,400" />
      <NeoCard title="CPU Usage" value="62%" />
    </div>
  </div>
);

const Dashboard = () => (
  <div className="glass rounded-2xl border border-cyan-400/20 p-6 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
    <h3 className="text-lg text-cyan-200 mb-2">Neural Grid Background</h3>
    <div className="h-56 relative rounded-2xl overflow-hidden">
      <NeuralBackground />
    </div>
  </div>
);

export default function App() {
  return (
    <NeoLayout>
      <main className="max-w-6xl mx-auto space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-cyan-300 tracking-[0.35em]">JEIKEI</h1>
          <p className="text-gray-400 tracking-[0.3em] text-sm">DESIGN SYSTEM</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-cyan-200">Gallery</h2>
          <Gallery />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-cyan-200">Dashboard</h2>
          <Dashboard />
        </section>
      </main>
    </NeoLayout>
  );
}

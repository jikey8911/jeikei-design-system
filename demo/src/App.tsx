import React from 'react';
import { NeoButton, NeoCard, NeoGrid, NeoInput, NeuralGrid } from 'jeikei-design-system';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden text-[#dceeff]">
      <NeuralGrid />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-black tracking-[0.35em] text-cyan-200">JEIKEI</h1>
          <p className="text-sm tracking-[0.25em] text-cyan-100/80">DESIGN SYSTEM</p>
        </header>

        <NeoGrid columns={{ base: 1, md: 2 }} gap="md" className="items-center">
          <NeoCard glass glow>
            <h3 className="text-lg font-semibold text-white mb-4">NeoButton</h3>
            <div className="flex flex-wrap gap-3">
              <NeoButton>Primary</NeoButton>
              <NeoButton variant="secondary">Secondary</NeoButton>
              <NeoButton variant="outline">Outline</NeoButton>
            </div>
          </NeoCard>

          <NeoCard glass glow>
            <h3 className="text-lg font-semibold text-white mb-4">NeoInput</h3>
            <NeoInput placeholder="Type here..." />
          </NeoCard>
        </NeoGrid>

        <div className="flex justify-center">
          <NeoButton className="px-10 text-lg" glow>
            NeoButton
          </NeoButton>
        </div>

        <NeoGrid columns={{ base: 1, md: 3 }} gap="md">
          <NeoCard title="NeoCard" value="1,250" glass glow>
            <p className="text-sm text-gray-300">Users Online</p>
            <p className="text-3xl text-cyan-300 mt-1">1,250</p>
          </NeoCard>
          <NeoCard title="NeoCard" value="$32,400" glass glow>
            <p className="text-sm text-gray-300">Revenue</p>
            <p className="text-3xl text-cyan-300 mt-1">$32,400</p>
          </NeoCard>
          <NeoCard title="NeoCard" value="62%" glass glow>
            <p className="text-sm text-gray-300">CPU Usage</p>
            <p className="text-3xl text-cyan-300 mt-1">62%</p>
          </NeoCard>
        </NeoGrid>

        <NeoCard glass glow>
          <h3 className="text-lg font-semibold text-white mb-2">Neural Grid Background</h3>
          <div className="h-56 relative rounded-2xl overflow-hidden">
            <NeuralGrid />
          </div>
        </NeoCard>
      </main>
    </div>
  );
}

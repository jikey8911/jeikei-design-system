import React from 'react';
import { NeuralBackground } from '../neural/NeuralBackground';

interface NeoLayoutProps {
  children: React.ReactNode;
}

export const NeoLayout: React.FC<NeoLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#07090f] text-white overflow-hidden">
      <NeuralBackground />

      <div className="relative z-10 p-10">
        {children}
      </div>
    </div>
  );
};

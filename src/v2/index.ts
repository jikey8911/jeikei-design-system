// Auto-import base styles — consumers don't need to import CSS manually
import './styles/globals.css';
import './styles/effects.css';

// Global Components
export { NeoButton } from './components/NeoButton';
export { NeoCard } from './components/NeoCard';
export { NeoInput } from './components/NeoInput';
export { NeoBadge } from './components/NeoBadge';
export { NeoGrid } from './components/NeoGrid';
export { NeoModal } from './components/NeoModal';
export { NeoPanel } from './components/NeoPanel';
export { NeoTable } from './components/NeoTable';
export { NeoTabs } from './components/NeoTabs';
export { NeoToast } from './components/NeoToast';

// Layouts
export { NeoLayout } from './layouts/NeoLayout';

// Neural Engine & System
export { NeuralEngine } from './neural/NeuralEngine';
export { NeuralBackground } from './neural/NeuralBackground';
export { SystemProvider } from './system/SystemProvider';
export { useSystem } from './system/SystemContext';

// Types
export * from './neural/neural-types';
export * from './system/SystemContext';

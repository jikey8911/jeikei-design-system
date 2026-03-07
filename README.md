# JeiKei Neural Design System 🧠✨

A professional, futuristic design system with a neural glass-neon aesthetic.

## Features

- **50+ Neural Components**: From basic buttons to complex data grids and dashboards.
- **Neural UI Engine**: Animated neural grid background with interactive pulses.
- **Glassmorphism & Neon**: High-quality UI components with blur and glow effects.
- **Storybook**: Full documentation and playground for all components.
- **Tailwind Preset**: Ready to use in any Tailwind project.

## Project Structure

- `src/neural`: Core neural animation engine.
- `src/components`: UI components organized by category (surfaces, visuals, feedback, etc.).
- `src/hooks`: Custom hooks for system integration and effects.
- `docs/dashboard`: A complete Mission Control dashboard demo.
- `scripts/`: Automation scripts for component synchronization.

## Installation

```bash
npm install github:jikey8911/jeikei-design-system
```

## Usage

```tsx
import { NeuralGrid, GlassCard, NeonButton } from 'jeikei-neural-design-system';

const App = () => (
  <main>
    <NeuralGrid sparkles={true} />
    <GlassCard>
      <h1>System Active</h1>
      <NeonButton>INITIATE</NeonButton>
    </GlassCard>
  </main>
);
```

## Scripts

- `npm run storybook`: Launch Storybook development environment.
- `npm run import:repos`: Scan and import components from other repositories.
- `npm run build`: Compile TypeScript components.

---
Developed by **JeiKei**. FUTURISTIC // NEURAL // NEON

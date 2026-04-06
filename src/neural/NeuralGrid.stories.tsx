import type { Meta, StoryObj } from '@storybook/react';
import { NeuralGrid } from './NeuralGrid';

const meta: Meta<typeof NeuralGrid> = {
  title: 'Neural/NeuralGrid',
  component: NeuralGrid,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof NeuralGrid>;

export const Interactive: Story = {
  args: { interactive: true, density: 0.5, speed: 1 },
  render: (args) => (
    <div className="relative h-[400px] bg-neo-bg">
      <NeuralGrid {...args} />
    </div>
  ),
};

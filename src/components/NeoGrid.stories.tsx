import type { Meta, StoryObj } from '@storybook/react';
import { NeoGrid } from './NeoGrid';

const meta: Meta<typeof NeoGrid> = {
  title: 'Layout/NeoGrid',
  component: NeoGrid,
};

export default meta;
type Story = StoryObj<typeof NeoGrid>;

export const Basic: Story = {
  render: () => (
    <NeoGrid columns={{ base: 1, md: 3 }} gap="md">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="glass-surface h-24 flex items-center justify-center">
          Item {i + 1}
        </div>
      ))}
    </NeoGrid>
  ),
};

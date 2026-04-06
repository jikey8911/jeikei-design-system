import type { Meta, StoryObj } from '@storybook/react';
import { NeoPanel } from './NeoPanel';
import { NeoButton } from './NeoButton';

const meta: Meta<typeof NeoPanel> = {
  title: 'Core/NeoPanel',
  component: NeoPanel,
  args: {
    title: 'Operations Panel',
    children: 'Panel content',
  },
};

export default meta;
type Story = StoryObj<typeof NeoPanel>;

export const Basic: Story = {};

export const WithActions: Story = {
  args: {
    actions: (
      <>
        <NeoButton size="sm" variant="outline">
          Pause
        </NeoButton>
        <NeoButton size="sm" glow>
          Pulse
        </NeoButton>
      </>
    ),
  },
};


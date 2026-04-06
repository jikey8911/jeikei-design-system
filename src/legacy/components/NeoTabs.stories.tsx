import type { Meta, StoryObj } from '@storybook/react';
import { NeoTabs } from './NeoTabs';

const meta: Meta<typeof NeoTabs> = {
  title: 'Core/NeoTabs',
  component: NeoTabs,
};

export default meta;
type Story = StoryObj<typeof NeoTabs>;

export const Basic: Story = {
  args: {
    tabs: [
      { id: 'one', label: 'Overview', content: 'Overview content' },
      { id: 'two', label: 'Metrics', content: 'Metrics content' },
      { id: 'three', label: 'Logs', content: 'Logs content' },
    ],
  },
};


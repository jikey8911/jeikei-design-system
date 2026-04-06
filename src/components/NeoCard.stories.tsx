import type { Meta, StoryObj } from '@storybook/react';
import { NeoCard } from './NeoCard';
import { NeoButton } from './NeoButton';

const meta: Meta<typeof NeoCard> = {
  title: 'Core/NeoCard',
  component: NeoCard,
  args: {
    title: 'Neural Card',
    description: 'Glass surface with neon glow',
    children: 'Card body goes here',
  },
};

export default meta;
type Story = StoryObj<typeof NeoCard>;

export const Basic: Story = {};

export const WithFooter: Story = {
  args: {
    footer: <NeoButton size="sm">Action</NeoButton>,
  },
};

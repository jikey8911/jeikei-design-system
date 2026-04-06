import type { Meta, StoryObj } from '@storybook/react';
import { NeoToast } from './NeoToast';

const meta: Meta<typeof NeoToast> = {
  title: 'Feedback/NeoToast',
  component: NeoToast,
  args: {
    message: 'Transmission synced',
    description: 'Neural link stabilized',
    variant: 'success',
  },
};

export default meta;
type Story = StoryObj<typeof NeoToast>;

export const Success: Story = {};
export const Warning: Story = { args: { variant: 'warning', message: 'Latency rising' } };
export const Danger: Story = { args: { variant: 'danger', message: 'Link lost' } };

import type { Meta, StoryObj } from '@storybook/react';
import { NeoBadge } from './NeoBadge';

const meta: Meta<typeof NeoBadge> = {
  title: 'Core/NeoBadge',
  component: NeoBadge,
  args: {
    children: 'ONLINE',
  },
};

export default meta;
type Story = StoryObj<typeof NeoBadge>;

export const Accent: Story = {};
export const Warning: Story = { args: { variant: 'warning' } };
export const Danger: Story = { args: { variant: 'danger' } };

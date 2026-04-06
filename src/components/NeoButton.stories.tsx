import type { Meta, StoryObj } from '@storybook/react';
import { NeoButton } from './NeoButton';

const meta: Meta<typeof NeoButton> = {
  title: 'Core/NeoButton',
  component: NeoButton,
  args: {
    children: 'Activate',
    glow: true,
  },
};

export default meta;
type Story = StoryObj<typeof NeoButton>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

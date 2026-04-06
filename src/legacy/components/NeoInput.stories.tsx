import type { Meta, StoryObj } from '@storybook/react';
import { NeoInput } from './NeoInput';

const meta: Meta<typeof NeoInput> = {
  title: 'Core/NeoInput',
  component: NeoInput,
  args: {
    label: 'Identifier',
    placeholder: 'NX-09',
  },
};

export default meta;
type Story = StoryObj<typeof NeoInput>;

export const Default: Story = {};
export const Error: Story = { args: { error: 'Invalid token' } };


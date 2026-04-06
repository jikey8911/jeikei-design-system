import type { Meta, StoryObj } from '@storybook/react';
import { NeoModal } from './NeoModal';
import { NeoButton } from './NeoButton';
import React from 'react';

const meta: Meta<typeof NeoModal> = {
  title: 'Core/NeoModal',
  component: NeoModal,
  args: {
    open: true,
    title: 'Neural Modal',
    children: 'This modal floats over the neural background.',
  },
};

export default meta;
type Story = StoryObj<typeof NeoModal>;

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    return (
      <>
        <NeoButton onClick={() => setOpen(true)}>Open</NeoButton>
        <NeoModal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          footer={
            <>
              <NeoButton variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </NeoButton>
              <NeoButton glow onClick={() => setOpen(false)}>
                Confirm
              </NeoButton>
            </>
          }
        />
      </>
    );
  },
};


import type { Meta, StoryObj } from '@storybook/react';
import { NeoTable } from './NeoTable';

const meta: Meta<typeof NeoTable<any>> = {
  title: 'Data/NeoTable',
  component: NeoTable,
};

export default meta;
type Story = StoryObj<typeof NeoTable<any>>;

export const Basic: Story = {
  render: () => (
    <NeoTable
      columns={[
        { key: 'id', header: 'Node' },
        { key: 'status', header: 'Status' },
        { key: 'latency', header: 'Latency', align: 'right' },
      ]}
      data={[
        { id: 'A-12', status: 'Online', latency: '18ms' },
        { id: 'B-04', status: 'Offline', latency: '—' },
      ]}
    />
  ),
};


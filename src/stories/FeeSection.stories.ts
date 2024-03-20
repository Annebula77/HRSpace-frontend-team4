import type { Meta, StoryObj } from '@storybook/react';

import FeeSection from '../components/feeSection/FeeSection';

const meta = {
  title: 'Example/FeeSection',
  component: FeeSection,
  tags: ['autodocs'],
} satisfies Meta<typeof FeeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    model: 'model 1',
    minSalaryValue: '100000',
    maxSalaryValue: '200000',
  }
};
import type { Meta, StoryObj } from '@storybook/react';

import HeaderNavigation from '../components/headerNavigation/HeaderNavigation';

const meta = {
  title: 'Example/HeaderNavigation',
  component: HeaderNavigation,
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    $primary: false,
  }
};
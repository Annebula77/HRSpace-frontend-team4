import type { Meta, StoryObj } from '@storybook/react';

import Header from '../components/header/Header';

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    // NOTE: More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}

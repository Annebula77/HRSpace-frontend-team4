import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/button/Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Warning: StoryObj<typeof Button> = {
  args: {
    primary: true,
    children: 'Delete now',
    backgroundColor: 'red',
  },
};

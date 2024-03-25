import type { Meta, StoryObj } from "@storybook/react";

import Counter from "../components/counter/Counter";


const meta = {
  title: "Example/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;


const onChange = () => { };

export const Primary: Story = {
  args: {
    value: 1,
    min: 1,
    max: 10,
    onChange: onChange,
  },
};


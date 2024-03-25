import type { Meta, StoryObj } from "@storybook/react";

import RadioChip from "../components/radioChip/RadioInput";


const meta = {
  title: "Example/RadioChip",
  component: RadioChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioChip>;

export default meta;
type Story = StoryObj<typeof meta>;


const onChange = () => { };

export const Primary: Story = {
  args: {
    id: "1",
    label: "hello",
    name: "input-name",
    checked: true,
    onChange: onChange,
  },
};


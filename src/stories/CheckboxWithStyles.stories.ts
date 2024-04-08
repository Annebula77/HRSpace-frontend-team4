import type { Meta, StoryObj } from "@storybook/react";

import CheckboxWithStyles from "../components/СheckboxWithStyles/CheckboxWithStyles";


const meta = {
  title: "Example/CheckboxWithStyles",
  component: CheckboxWithStyles,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxWithStyles>;

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


import type { Meta, StoryObj } from "@storybook/react";

import InputWithText from "../components/inputWithText/InputWithText";


const meta = {
  title: "Example/InputWithText",
  component: InputWithText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputWithText>;

export default meta;
type Story = StoryObj<typeof meta>;


const onChange = () => { };

export const Primary: Story = {
  args: {
    name: "input-name",
    value: "",
    placeholder: "input value",
    onChange: onChange,
  },
};

export const Error: Story = {
  args: {
    ...Primary.args,
    error: true,
  },
  parameters: {
    docs: {
      storyDescription: "This is an input with an error state.",
    },
  },
};
import type { Meta, StoryObj } from "@storybook/react";

import FeeSection from "../components/feeSection/FeeSection";

const meta = {
  title: "Example/FeeSection",
  component: FeeSection,
  tags: ["autodocs"],
} satisfies Meta<typeof FeeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const onChange = () => { };

export const Primary: Story = {
  args: {
    minValue: 100000,
    maxValue: 200000,
    recommendedValue: 300000,
    sliderValue: 150000,
    isError: true,
    onChange: onChange,
    errorMessage: "it is an error",
  }
};
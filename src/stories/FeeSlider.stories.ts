import type { Meta, StoryObj } from "@storybook/react";

import FeeSlider from "../components/feeSlider/FeeSlider";

const meta = {
  title: "Example/FeeSlider",
  component: FeeSlider,
  tags: ["autodocs"],
} satisfies Meta<typeof FeeSlider>;

export default meta;


type Story = StoryObj<typeof meta>;

const onChange = () => { };

export const Primary: Story = {
  args: {
    onChange: onChange,
    minValue: 50000,
    maxValue: 150000,
    recommendedValue: 75000,
    sliderValue: 75000,
    isError: false,
  }
};
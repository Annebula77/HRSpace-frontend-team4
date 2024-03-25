import type { Meta, StoryObj } from "@storybook/react";

import Footer from "../components/footer/Footer";

const meta = {
  title: "Example/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    // NOTE: More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
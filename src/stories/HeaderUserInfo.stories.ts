import type { Meta, StoryObj } from "@storybook/react";

import HeaderUserInfo from "../components/headerUserInfo/HeaderUserInfo";

const meta = {
  title: "Example/HeaderUserInfo",
  component: HeaderUserInfo,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderUserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}



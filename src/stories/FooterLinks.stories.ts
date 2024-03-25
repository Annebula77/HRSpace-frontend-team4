import type { Meta, StoryObj } from "@storybook/react";

import FooterLinks from "../components/footerLinks/FooterLinks";

const meta = {
  title: "Example/FooterLinks",
  component: FooterLinks,
  tags: ["autodocs"],
} satisfies Meta<typeof FooterLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
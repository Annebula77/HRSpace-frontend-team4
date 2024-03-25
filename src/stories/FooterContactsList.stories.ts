import type { Meta, StoryObj } from "@storybook/react";

import FooterContactsList from "../components/footerContactsList/FooterContactsList";

const meta = {
  title: "Example/FooterContactsList",
  component: FooterContactsList,
  tags: ["autodocs"],
} satisfies Meta<typeof FooterContactsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

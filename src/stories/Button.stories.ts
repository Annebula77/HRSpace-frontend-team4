import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "../components/CustomButton/CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Example/Button",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;

export const Primary: StoryObj<typeof CustomButton> = {
  args: {
    primary: true,
    children: "Button",
  },
};

export const Secondary: StoryObj<typeof CustomButton> = {
  args: {
    children: "Button",
  },
};

export const Large: StoryObj<typeof CustomButton> = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small: StoryObj<typeof CustomButton> = {
  args: {
    size: "small",
    children: "Button",
  },
};

export const Warning: StoryObj<typeof CustomButton> = {
  args: {
    primary: true,
    children: "Delete now",
    backgroundColor: "red",
  },
};

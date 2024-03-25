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

// NOTE: Так как InputWithText - это просто поле ввода, нам нужно пока замокать onChange
const onChange = () => { };

export const Primary: Story = {
  args: {
    name: "input-name",
    value: "",
    placeholder: "input value", //NOTE: просто подставляем дефолтные значения 
    onChange: onChange, // NOTE: В реальной ситуации здесь должна быть функция для обработки изменений
  },
};

export const Error: Story = {
  args: {
    ...Primary.args,
    error: true, //  NOTE: Активация стиля ошибки
  },
  parameters: {
    docs: {
      storyDescription: "This is an input with an error state.",
    },
  },
};
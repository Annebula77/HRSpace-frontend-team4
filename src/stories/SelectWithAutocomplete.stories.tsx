import { Meta, StoryObj } from "@storybook/react";
import SelectWithAutoComplete, { type OptionType, type SelectWithAutoCompleteProps } from "../components/selectWithAutocomplete/SelectWithAutoComplete";
import { useState } from "react";




const meta: Meta<SelectWithAutoCompleteProps<OptionType>> = {
  title: "Components/SelectWithAutoComplete",
  component: SelectWithAutoComplete,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const options = [
  { id: "1", name: "Option 1" },
  { id: "2", name: "Option 2" },
];

const Primary: StoryObj<SelectWithAutoCompleteProps<OptionType>> = {
  render: (args) => {
    const [value, setValue] = useState<OptionType | null>(null);

    return (
      <SelectWithAutoComplete
        {...args}
        value={value}
        options={options}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
  args: {
    getOptionLabel: (option) => option.name,
    placeholder: "Введите или выберите опцию",
  },
};

export const Default = Primary;

const Errored: StoryObj<SelectWithAutoCompleteProps<OptionType>> = {
  render: (args) => {
    const [value, setValue] = useState<OptionType | null>(null);
    const [isError, setIsError] = useState(true);

    const handleChange = (newValue: OptionType | null) => {
      setValue(newValue);
      setIsError(!newValue);
    };

    return (
      <SelectWithAutoComplete
        {...args}
        value={value}
        options={options}
        onChange={handleChange}
        error={isError}
      />
    );
  },
  args: {
    getOptionLabel: (option) => option.name,
    placeholder: "Введите или выберите опцию",
  },
};

export const Error = Errored;


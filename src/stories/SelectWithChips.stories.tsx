import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SelectWithChips, { type SelectWithChipsProps } from '../components/selectWithChips/SelectWithChips';


export default {
  title: 'Components/SelectWithChips',
  component: SelectWithChips,
} as Meta<SelectWithChipsProps>;

export const Primary: StoryObj<SelectWithChipsProps> = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleChange = (newValue: string[]) => {
      setSelectedValues(newValue);
      if (args.onChange) {
        args.onChange(newValue);
      }
    };

    return (
      <SelectWithChips
        {...args}
        selectedValues={selectedValues}
        onChange={handleChange}
      />
    );
  },
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Рекомендованные навыки:',
    placeholder: 'Введите текст',
    error: false,
  },
};

export const Errored: StoryObj<SelectWithChipsProps> = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [isError, setIsError] = useState(true);


    const handleChange = (newValue: string[]) => {
      setSelectedValues(newValue);
      if (args.onChange) {
        args.onChange(newValue);
      }
      setIsError(!newValue);
    };

    return (
      <SelectWithChips
        {...args}
        selectedValues={selectedValues}
        onChange={handleChange}
        error={isError}
      />
    );
  },
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Рекомендованные навыки:',
    placeholder: 'Введите текст',
    error: false,
  },
};

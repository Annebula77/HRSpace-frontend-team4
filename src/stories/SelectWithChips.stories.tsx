import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SelectWithChips from '../components/selectWithChips/SelectWithChips';

interface SelectWithChipsProps {
  options: string[];
  label: string;
  placeholder: string;
  error?: boolean;
  onChange: (value: string[]) => void;
}

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

// TODO: сделать работающую stories
// import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import FeeSlider from '../components/feeSlider/FeeSlider';

const meta = {
  title: 'Example/FeeSlider',
  component: FeeSlider,
  tags: ['autodocs'],
} satisfies Meta<typeof FeeSlider>;

export default meta;

// const Template: StoryObj<typeof FeeSlider> = {
//   render: (args) => {

//     const [value, setValue] = useState<number | number[]>(args.recommendedValue);

//     const handleChange = (event: Event, newValue: number | number[]) => {
//       setValue(newValue as number);

//     };

//     return (
//       <FeeSlider
//         {...args}
//         sliderValue={value}
//         onChange={handleChange}
//       />
//     );
//   },
//   args: {
//     minValue: 50000,
//     maxValue: 150000,
//     recommendedValue: 75000,
//     sliderValue: value,
//     isError: false,
//   },
// };

// export const Primary = Template;

type Story = StoryObj<typeof meta>;

const onChange = () => { };

export const Primary: Story = {
  args: {
    label: 70000,
    onChange: onChange, // NOTE: В реальной ситуации здесь должна быть функция для обработки изменений
    minValue: 50000,
    maxValue: 150000,
    recommendedValue: 75000,
    sliderValue: 75000,
    isError: false,
  }
};
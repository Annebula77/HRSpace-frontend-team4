import React, { ReactNode, useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Meta, StoryObj } from '@storybook/react';
import CategorySelect from '../components/categorySelect/CategorySelect';
import categoriesReducer from '../store/slices/categorySlice';
import { Store } from '@reduxjs/toolkit';


interface MockStoreProps {
  children: ReactNode;
  store: Store;
}

const MockStore: React.FC<MockStoreProps> = ({ children, store }) => (
  <Provider store={store}> {children} </Provider>
);

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
  preloadedState: {
    categories: {
      categories: [
        { id: '1', name: 'category 1' },
        { id: '2', name: 'category 2' },
        { id: '3', name: 'category 3' },
      ],
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  },
});

const meta: Meta<typeof CategorySelect> = {
  title: 'Components/CategorySelect',
  component: CategorySelect,
  decorators: [
    (Story) => (
      <MockStore store={store}>
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      </MockStore>
    ),
  ],
};

export default meta;

const Template: StoryObj<typeof CategorySelect> = {
  render: (args) => {

    const [value, setValue] = useState<string | null>(args.value);


    const handleChange = (newValue: string | null) => {
      setValue(newValue);
    };

    return (
      <CategorySelect
        {...args}
        value={value}
        onChange={handleChange}
      />
    );
  },
  args: {
    value: null,
    error: false,
    helperText: 'введите текст',
  },
};

export const Primary = Template;
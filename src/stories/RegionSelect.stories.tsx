import React, { ReactNode, useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Meta, StoryObj } from '@storybook/react';
import RegionSelect from '../components/regionSelect/RegionSelect';
import regionsReducer from '../store/slices/regionsSlice';
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
    regions: regionsReducer,
  },
  preloadedState: {
    regions: {
      regions: [
        { id: 1, name: 'Region 1' },
        { id: 2, name: 'Region 2' },
        { id: 3, name: 'Region 3' },
      ],
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  },
});

const meta: Meta<typeof RegionSelect> = {
  title: 'Components/RegionSelect',
  component: RegionSelect,
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

const Template: StoryObj<typeof RegionSelect> = {
  render: (args) => {

    const [value, setValue] = useState<number | null>(args.value);


    const handleChange = (newValue: number | null) => {
      setValue(newValue);
    };

    return (
      <RegionSelect
        {...args}
        value={value}
        onChange={handleChange}
      />
    );
  },
  args: {
    value: null,
    error: false,
    helperText: '',
  },
};

export const Primary = Template;
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { GET_REGIONS_URL } from '../../utils/variables';
import { type CategoryInListModel, categoryInListSchema } from '../../models/categoryListSchema';

export const fetchCategories = createAsyncThunk<CategoryInListModel[],
void,
{ rejectValue: string }
>(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(GET_REGIONS_URL);
      const safeCategories = categoryInListSchema.array().parse(response.data);
      return safeCategories;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  },
);

interface CategoriesState {
  categories: CategoryInListModel[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<CategoryInListModel[]>) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || 'Unknown error';
      });
  },
});

export const selectCategories = (state: RootState) => state.categories.categories;
export const selectIsLoading = (state: RootState) => state.categories.isLoading;
export const selectIsError = (state: RootState) => state.categories.isError;
export const selectErrorMessage = (state: RootState) => state.categories.errorMessage;

export default categoriesSlice.reducer;

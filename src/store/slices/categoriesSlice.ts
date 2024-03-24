import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { GET_CATEGORIES_URL } from '../../utils/variables';
import { type CategoryInListModel, categoryInListSchema } from '../../models/categoryListSchema';
import fetchData from '../../utils/fetchData';

export const fetchCategories = createAsyncThunk<CategoryInListModel[], void, { rejectValue: string }>(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData<CategoryInListModel[]>(
        GET_CATEGORIES_URL,
        categoryInListSchema.array(),
        rejectWithValue);
    } catch (error) {
      return rejectWithValue('Failed to fetch categories');
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

export default categoriesSlice.reducer;

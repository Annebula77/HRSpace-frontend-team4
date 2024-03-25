import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { GET_CATEGORY_URL } from '../../utils/variables';
import { type SingleCategoryModel, singleCategorySchema } from '../../models/singleCategorySchema';
import fetchData from '../../utils/fetchData';

export const fetchCategory = createAsyncThunk<SingleCategoryModel, number, { rejectValue: string }>(
  'category/fetchCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      return await fetchData<SingleCategoryModel>(
        `${GET_CATEGORY_URL}/${categoryId}/`,
        singleCategorySchema,
        rejectWithValue,
      );
    } catch (error) {
      return rejectWithValue('Failed to fetch category');
    }
  },
);

interface SingleCategoryState {
  skills: string[];
  responsibilities: string[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: SingleCategoryState = {
  skills: [],
  responsibilities: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const SingleCategorySlice = createSlice({
  name: 'skills and responsibilities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(fetchCategory.fulfilled, (state, action: PayloadAction<SingleCategoryModel>) => {
        state.isLoading = false;
        state.skills = action.payload.skills?.map((skill) => skill.name) || [];
        state.responsibilities = action.payload.responsibilities?.map((resp) => resp.name) || [];
      })
      .addCase(fetchCategory.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || 'Unknown error';
      });
  },
});

export default SingleCategorySlice.reducer;

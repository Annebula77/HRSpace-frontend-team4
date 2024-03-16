import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { GET_REGIONS_URL } from '../../utils/variables';
import { type RegionModel, regionSchema } from '../../models/regionSchema';

export const fetchRegions = createAsyncThunk<RegionModel[], void, { rejectValue: string }>(
  'regions/fetchRegions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(GET_REGIONS_URL);
      const safeRegions = regionSchema.array().parse(response.data);
      return safeRegions;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  },
);

interface RegionsState {
  regions: RegionModel[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: RegionsState = {
  regions: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegions.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(fetchRegions.fulfilled, (state, action: PayloadAction<RegionModel[]>) => {
        state.isLoading = false;
        state.regions = action.payload;
      })
      .addCase(fetchRegions.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || 'Unknown error';
      });
  },
});

export const selectRegions = (state: RootState) => state.regions.regions;
export const selectIsLoading = (state: RootState) => state.regions.isLoading;
export const selectIsError = (state: RootState) => state.regions.isError;
export const selectErrorMessage = (state: RootState) => state.regions.errorMessage;

export default regionsSlice.reducer;

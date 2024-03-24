import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { GET_CITIES_URL } from '../../utils/variables';
import { type CityModel, citySchema } from '../../models/citySchema';
import fetchData from '../../utils/fetchData';

export const fetchCities = createAsyncThunk<CityModel[], void, { rejectValue: string }>(
  'cities/fetchCities',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData<CityModel[]>(
        GET_CITIES_URL,
        citySchema.array(),
        rejectWithValue
      );
    } catch (error) {
      return rejectWithValue('Failed to fetch cities');
    }
  }
);


interface CitiesState {
  cities: CityModel[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: CitiesState = {
  cities: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const citiesSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(fetchCities.fulfilled, (state, action: PayloadAction<CityModel[]>) => {
        state.isLoading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || 'Unknown error';
      });
  },
});

export default citiesSlice.reducer;

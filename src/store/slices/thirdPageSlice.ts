import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type FormErrors } from '../../types/types';


export interface ThirdPageFormData {
  number_employees: number | null;
  start_search: string | null;
  end_search: string | null;
  number_recruits: number | null;
  payment_model: string | null;
  reward: number | null;
  minReward: number;
  maxReward: number;
  recommendedReward: number;
  errors: FormErrors;
}

const initialState: ThirdPageFormData = {
  number_employees: null,
  start_search: '',
  end_search: '',
  number_recruits: null,
  payment_model: '',
  reward: null,
  minReward: 0,
  maxReward: 0,
  recommendedReward: 0,
  errors: {},
};

export const thirdPageSlice = createSlice({
  name: 'form3',
  initialState,
  reducers: {
    updateEmployeeNumber: (state, action: PayloadAction<number>) => {
      state.number_employees = action.payload;
    },

    updateStartSearch: (state, action: PayloadAction<string | null>) => {
      state.start_search = action.payload;
      if (state.errors.start_search) {
        const newErrors = { ...state.errors };
        delete newErrors.start_search;
        state.errors = newErrors;
      }
    },
    updateEndSearch: (state, action: PayloadAction<string | null>) => {
      state.end_search = action.payload;
      if (state.errors.end_search) {
        const newErrors = { ...state.errors };
        delete newErrors.end_search;
        state.errors = newErrors;
      }
    },
    updateRecruiterNumber: (state, action: PayloadAction<number>) => {
      state.number_recruits = action.payload;
    },

    updatePaymentModel: (state, action: PayloadAction<string | null>) => {
      state.payment_model = action.payload;
      if (state.errors.payment_model) {
        const newErrors = { ...state.errors };
        delete newErrors.payment_model;
        state.errors = newErrors;
      }
    },
    updateReward: (state, action: PayloadAction<number>) => {
      state.reward = action.payload;
      if (state.errors.reward) {
        const newErrors = { ...state.errors };
        delete newErrors.reward;
        state.errors = newErrors;
      }
    },
    updateMinReward: (state, action: PayloadAction<number>) => {
      state.minReward = action.payload;
      if (state.errors.minReward) {
        const newErrors = { ...state.errors };
        delete newErrors.minReward;
        state.errors = newErrors;
      }
    },
    updateMaxReward: (state, action: PayloadAction<number>) => {
      state.maxReward = action.payload;
    },
    updateRecommendedReward: (state, action: PayloadAction<number>) => {
      state.recommendedReward = action.payload;
      if (state.errors.recommendedReward) {
        const newErrors = { ...state.errors };
        delete newErrors.recommendedReward;
        state.errors = newErrors;
      }
    },
    setErrors: (state, action: PayloadAction<FormErrors>) => {
      state.errors = action.payload;
    },
  },
});

export const {
  updateEmployeeNumber,
  updateStartSearch,
  updateEndSearch,
  updateRecruiterNumber,
  updatePaymentModel,
  updateReward,
  updateMinReward,
  updateMaxReward,
  updateRecommendedReward,
  setErrors,
} = thirdPageSlice.actions;

export default thirdPageSlice.reducer;

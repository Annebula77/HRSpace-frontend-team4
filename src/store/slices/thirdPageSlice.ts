import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type FormErrors } from '../../types/types';


export interface ThirdPageFormData {
  number_employees: number | null;
  start_search: string | null;
  end_search: string | null;
  number_recruits: number | null;
  payment_model: string | null;
  reward: number | null;
  errors: FormErrors;
}

const initialState: ThirdPageFormData = {
  number_employees: null,
  start_search: '',
  end_search: '',
  number_recruits: null,
  payment_model: '',
  reward: null,
  errors: {},
};

export const thirdPageSlice = createSlice({
  name: 'form3',
  initialState,
  reducers: {
    updateEmployeeNumber: (state, action: PayloadAction<number>) => {
      state.number_employees = action.payload;
      if (state.errors.number_employees) {
        const newErrors = { ...state.errors };
        delete newErrors.number_employees;
        state.errors = newErrors;
      }
    },
    updateStartSearch: (state, action: PayloadAction<Date | null>) => {
      state.start_search = action.payload ? action.payload.toISOString().substring(0, 10) : null;
      if (state.errors.start_search) {
        const newErrors = { ...state.errors };
        delete newErrors.start_search;
        state.errors = newErrors;
      }
    },
    updateEndSearch: (state, action: PayloadAction<Date | null>) => {
      state.end_search = action.payload ? action.payload.toISOString().substring(0, 10) : null;
      if (state.errors.end_search) {
        const newErrors = { ...state.errors };
        delete newErrors.end_search;
        state.errors = newErrors;
      }
    },
    updateRecruiterNumber: (state, action: PayloadAction<number>) => {
      state.number_recruits = action.payload;
      if (state.errors.number_recruits) {
        const newErrors = { ...state.errors };
        delete newErrors.number_recruits;
        state.errors = newErrors;
      }
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
  setErrors,
} = thirdPageSlice.actions;

export default thirdPageSlice.reducer;

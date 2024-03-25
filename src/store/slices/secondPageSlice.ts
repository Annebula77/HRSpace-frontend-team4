import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type FormErrors } from '../../types/types';

export const COMPENSATION_OPTIONS = {
  meal: 'На питание',
  road: 'На транспорт',
  study: 'На обучение',
  living: 'На жилье',
};

export interface SecondPageFormData {
  work_place: string | null;
  work_format: string | null;
  employment_type: string | null;
  employee_registration: string | null;
  availability_DMS: boolean;
  compensation: string[];
  driver_license: boolean;
  having_car: boolean;
  company_descriptions: string | null;
  errors: FormErrors;
}

const initialState: SecondPageFormData = {
  work_place: null,
  work_format: null,
  employment_type: null,
  employee_registration: null,
  availability_DMS: false,
  compensation: [],
  driver_license: false,
  having_car: false,
  company_descriptions: '',
  errors: {},
};

export const secondPageSlice = createSlice({
  name: 'form2',
  initialState,
  reducers: {
    updateWorkPlace: (state, action: PayloadAction<string | null>) => {
      state.work_place = action.payload;
      if (state.errors.work_place) {
        const newErrors = { ...state.errors };
        delete newErrors.work_place;
        state.errors = newErrors;
      }
    },
    updateWorkFormat: (state, action: PayloadAction<string | null>) => {
      state.work_format = action.payload;
      if (state.errors.work_format) {
        const newErrors = { ...state.errors };
        delete newErrors.work_format;
        state.errors = newErrors;
      }
    },
    updateEmploymentType: (state, action: PayloadAction<string | null>) => {
      state.employment_type = action.payload;
      if (state.errors.employment_type) {
        const newErrors = { ...state.errors };
        delete newErrors.employment_type;
        state.errors = newErrors;
      }
    },
    updateEmploymentRegistration: (state, action: PayloadAction<string | null>) => {
      state.employee_registration = action.payload;
    },
    toggleAvailabilityDMS: (state, action: PayloadAction<boolean>) => {
      state.availability_DMS = action.payload;
    },
    updateCompensation: (state, action: PayloadAction<string>) => {
      const index = state.compensation.indexOf(action.payload);
      if (index >= 0) {
        state.compensation.splice(index, 1);
      } else {
        const availableValues = Object.values(COMPENSATION_OPTIONS);
        state.compensation = state.compensation.filter(
          (value: string) => availableValues.includes(value),
        );
        state.compensation.push(action.payload);
      }
    },
    toggleDriverLicense: (state, action: PayloadAction<boolean>) => {
      state.driver_license = action.payload;
    },
    toggleHavingCar: (state, action: PayloadAction<boolean>) => {
      state.having_car = action.payload;
    },
    updateCompanyDescriptions: (state, action: PayloadAction<string>) => {
      state.company_descriptions = action.payload;
    },
    setErrorsTwo: (state, action: PayloadAction<FormErrors>) => {
      state.errors = action.payload;
    },
  },
});

export const {
  updateWorkPlace,
  updateWorkFormat,
  updateEmploymentType,
  updateEmploymentRegistration,
  toggleAvailabilityDMS,
  updateCompensation,
  toggleDriverLicense,
  toggleHavingCar,
  updateCompanyDescriptions,
  setErrorsTwo,
} = secondPageSlice.actions;

export default secondPageSlice.reducer;

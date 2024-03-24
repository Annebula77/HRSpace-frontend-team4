import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormErrors {
  [key: string]: string;
}

export interface FirstPageFormData {
  job_title: string | null;
  specialization: string | null;
  skills: string[];
  responsibilities: string[];
  min_salary: number | null;
  max_salary: number | null;
  hide_salary: boolean;
  experience: string | null;
  education: string[];
  business_trips: boolean;
  errors: FormErrors;
}

const initialState: FirstPageFormData = {
  job_title: '',
  specialization: null,
  skills: [],
  responsibilities: [],
  min_salary: null,
  max_salary: null,
  hide_salary: false,
  experience: null,
  education: [],
  business_trips: false,
  errors: {},
};

export const firstPageSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateJobTitle: (state, action: PayloadAction<string>) => {
      state.job_title = action.payload;
      if (state.errors.job_title) {
        const newErrors = { ...state.errors };
        delete newErrors.job_title;
        state.errors = newErrors;
      }
    },
    updateSpecialization: (state, action: PayloadAction<string | null>) => {
      state.specialization = action.payload;
      if (state.errors.specialization) {
        const newErrors = { ...state.errors };
        delete newErrors.specialization;
        state.errors = newErrors;
      }
    },
    updateSkills: (state, action: PayloadAction<string[]>) => {
      state.skills = action.payload;
      if (state.errors.skills) {
        const newErrors = { ...state.errors };
        delete newErrors.skills;
        state.errors = newErrors;
      }
    },
    updateResponsibilities: (state, action: PayloadAction<string[]>) => {
      state.responsibilities = action.payload;
      if (state.errors.responsibilities) {
        const newErrors = { ...state.errors };
        delete newErrors.responsibilities;
        state.errors = newErrors;
      }
    },
    updateMinSalary: (state, action: PayloadAction<number | null>) => {
      state.min_salary = action.payload;
      if (state.errors.min_salary) {
        const newErrors = { ...state.errors };
        delete newErrors.min_salary;
        state.errors = newErrors;
      }
    },
    updateMaxSalary: (state, action: PayloadAction<number | null>) => {
      state.max_salary = action.payload;
      if (state.errors.max_salary) {
        const newErrors = { ...state.errors };
        delete newErrors.max_salary;
        state.errors = newErrors;
      }
    },
    toggleHideSalary: (state, action: PayloadAction<boolean>) => {
      state.hide_salary = action.payload;
    },
    updateExperience: (state, action: PayloadAction<string | null>) => {
      state.experience = action.payload;
      if (state.errors.experience) {
        const newErrors = { ...state.errors };
        delete newErrors.experience;
        state.errors = newErrors;
      }
    },
    updateEducation: (state, action: PayloadAction<string>) => {
      const index = state.education.indexOf(action.payload);
      if (index >= 0) {
        state.education.splice(index, 1);
      } else {
        state.education.push(action.payload);
      }
      if (state.errors.education) {
        const newErrors = { ...state.errors };
        delete newErrors.education;
        state.errors = newErrors;
      }
    },
    toggleBusinessTrips: (state, action: PayloadAction<boolean>) => {
      state.business_trips = action.payload;
    },
    setErrors: (state, action: PayloadAction<FormErrors>) => {
      state.errors = action.payload;
    },
  },
});

export const {
  updateJobTitle,
  updateSpecialization,
  updateSkills,
  updateResponsibilities,
  updateMinSalary,
  updateMaxSalary,
  toggleHideSalary,
  updateExperience,
  updateEducation,
  toggleBusinessTrips,
  setErrors,
} = firstPageSlice.actions;

export default firstPageSlice.reducer;

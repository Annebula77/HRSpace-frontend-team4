import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type FormErrors } from "../../types/types";

export interface ForthPageFormData {
  recruiter_experience: string | null;
  recruiter_job: string[] | null;
  type_resume: string | null;
  additional_requirements: string | null;
  isLegalEntity: boolean;
  stoplist_companies: string | null;
  stoplist_employee: string | null;
  file_url: string | null;
  errors: FormErrors;
}

const initialState: ForthPageFormData = {
  recruiter_experience: "",
  recruiter_job: [],
  type_resume: "",
  additional_requirements: "",
  isLegalEntity: false,
  stoplist_companies: "",
  stoplist_employee: "",
  file_url: "",
  errors: {},
};

export const forthPageSlice = createSlice({
  name: "form4",
  initialState,
  reducers: {
    updateExperience: (state, action: PayloadAction<string | null>) => {
      state.recruiter_experience = action.payload;
    },
    updateResponsibilities: (state, action: PayloadAction<string>) => {
      const responsibility = action.payload;
      if (!state.recruiter_job) {
        state.recruiter_job = [responsibility];
      }
      if (state.recruiter_job.includes(responsibility)) {
        state.recruiter_job = state.recruiter_job.filter((item) => item !== responsibility);
      } else {
        state.recruiter_job.push(responsibility);
      }
    },
    updateResumeType: (state, action: PayloadAction<string | null>) => {
      state.type_resume = action.payload;
    },
    updateAdditionalRequirements: (state, action: PayloadAction<string>) => {
      state.additional_requirements = action.payload;
      if (state.errors.additional_requirements) {
        const newErrors = { ...state.errors };
        delete newErrors.additional_requirements;
        state.errors = newErrors;
      }
    },
    toggleLICheck: (state, action: PayloadAction<boolean>) => {
      state.isLegalEntity = action.payload;
    },
    updateStopCompany: (state, action: PayloadAction<string>) => {
      state.stoplist_companies = action.payload;
      if (state.errors.stoplist_companies) {
        const newErrors = { ...state.errors };
        delete newErrors.stoplist_companies;
        state.errors = newErrors;
      }
    },
    updateStopEmployee: (state, action: PayloadAction<string>) => {
      state.stoplist_employee = action.payload;
      if (state.errors.stoplist_employee) {
        const newErrors = { ...state.errors };
        delete newErrors.stoplist_employee;
        state.errors = newErrors;
      }
    },

    updateFileUrl: (state, action: PayloadAction<string | null>) => {
      state.file_url = action.payload;
      if (state.errors.file_url) {
        const newErrors = { ...state.errors };
        delete newErrors.file_url;
        state.errors = newErrors;
      }
    },
    setErrorsFour: (state, action: PayloadAction<FormErrors>) => {
      state.errors = action.payload;
    },
  },
});

export const {
  updateExperience,
  updateResponsibilities,
  updateResumeType,
  updateAdditionalRequirements,
  toggleLICheck,
  updateStopCompany,
  updateStopEmployee,
  updateFileUrl,
  setErrorsFour,
} = forthPageSlice.actions;

export default forthPageSlice.reducer;

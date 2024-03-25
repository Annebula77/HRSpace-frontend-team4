import { type ForthPageFormData } from '../../store/slices/forthPageSlice';
import { type FormErrors } from '../../types/types';
import { isValidTextAndNumbers } from '../../utils/regexValidationFuncs';

const hrFormStepFourValidation = (forthPageState: ForthPageFormData): {
  isValid: boolean;
  newErrors: FormErrors
} => {
  let isValid = true;
  const newErrors: FormErrors = {};

  if (forthPageState.additional_requirements !== null
    && forthPageState.additional_requirements.trim() !== ''
    && !isValidTextAndNumbers(forthPageState.additional_requirements)) {
    newErrors.additional_requirements = 'Поле должно содержать только буквы, препинания, тире и цифры';
    isValid = false;
  }

  if (forthPageState.stoplist_companies !== null
    && forthPageState.stoplist_companies.trim() !== ''
    && !isValidTextAndNumbers(forthPageState.stoplist_companies)) {
    newErrors.stoplist_companies = 'Поле должно содержать только буквы, препинания, тире и цифры';
    isValid = false;
  }
  if (forthPageState.stoplist_employee !== null
    && forthPageState.stoplist_employee.trim() !== ''
    && !isValidTextAndNumbers(forthPageState.stoplist_employee)) {
    newErrors.stoplist_employee = 'Поле должно содержать только буквы, препинания, тире и цифры';
    isValid = false;
  }

  return { isValid, newErrors };
};

export default hrFormStepFourValidation;

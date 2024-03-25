import { type SecondPageFormData } from '../../store/slices/secondPageSlice';
import { type FormErrors } from '../../types/types';
import { isValidTextAndNumbers } from '../../utils/regexValidationFuncs';

const hrFormStepTwoValidation = (secondPageState: SecondPageFormData): {
  isValid: boolean;
  newErrors: FormErrors
} => {
  let isValid = true;
  const newErrors: FormErrors = {};

  if (!secondPageState.work_place) {
    newErrors.work_place = 'Выберите город';
    isValid = false;
  }

  if (!secondPageState.work_format) {
    newErrors.work_format = 'Выберите формат работы';
    isValid = false;
  }

  if (!secondPageState.employment_type) {
    newErrors.employment_type = 'Выберите тип занятости';
    isValid = false;
  }

  if (secondPageState.company_descriptions !== null
    && secondPageState.company_descriptions.trim() !== ''
    && !isValidTextAndNumbers(secondPageState.company_descriptions)) {
    newErrors.company_descriptions = 'Поле должно содержать только буквы, препинания, тире и цифры';
    isValid = false;
  }

  return { isValid, newErrors };
};

export default hrFormStepTwoValidation;

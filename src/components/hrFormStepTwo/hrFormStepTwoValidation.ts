import { type SecondPageFormData, type FormErrors } from '../../store/slices/secondPageSlice';
import { isValidText } from '../../utils/regexValidationFuncs';

const hrFormStepTwoValidation = (secondPageState: SecondPageFormData): {
  isValid: boolean;
  newErrors: FormErrors
} => {
  let isValid = true;
  const newErrors: FormErrors = {};

  if (!secondPageState.work_place) {
    newErrors.work_place = 'Выберите город';
    isValid = false;
  } else if (!isValidText(secondPageState.work_place)) {
    newErrors.work_place = 'Поле должно содержать только буквы и тире';
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

  // if (!isValidText(secondPageState.company_descriptions)) {
  //   newErrors.company_descriptions = `Поле должно содержать только буквы,
  // препинания, тире и цифры`;
  //   isValid = false;
  // }

  return { isValid, newErrors };
};

export default hrFormStepTwoValidation;

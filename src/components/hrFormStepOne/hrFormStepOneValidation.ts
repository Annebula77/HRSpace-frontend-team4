import { type FirstPageFormData, type FormErrors } from '../../store/slices/firstPageSlice';
import { isValidNumber, isValidText } from '../../utils/regexValidationFuncs';

const hrFormStepOneValidation = (firstPageState: FirstPageFormData): {
  isValid: boolean;
  newErrors: FormErrors
} => {
  let isValid = true;
  const newErrors: FormErrors = {};

  if (!firstPageState.job_title) {
    newErrors.job_title = 'Введите название должности';
    isValid = false;
  } else if (!isValidText(firstPageState.job_title)) {
    newErrors.job_title = 'Поле должно содержать только буквы и тире';
    isValid = false;
  }

  if (!firstPageState.specialization) {
    newErrors.specialization = 'Специализация не выбрана';
    isValid = false;
  }

  if (!firstPageState.skills.length) {
    newErrors.skills = 'Необходимо ввести или выбрать навыки';
    isValid = false;
  }

  if (!firstPageState.responsibilities.length) {
    newErrors.responsibilities = 'Необходимо ввести или выбрать обязанности';
    isValid = false;
  }

  if (firstPageState.min_salary !== null && !isValidNumber(firstPageState.min_salary)) {
    newErrors.min_salary = 'Поле должно быть числом';
    isValid = false;
  } else if (!firstPageState.max_salary) {
    newErrors.min_salary = 'Заполните поля';
    isValid = false;
  }

  if (firstPageState.max_salary !== null && !isValidNumber(firstPageState.max_salary)) {
    newErrors.max_salary = 'Поле должно быть числом';
    isValid = false;
  } else if (!firstPageState.max_salary) {
    newErrors.max_salary = 'Заполните поля';
    isValid = false;
  }

  if (!firstPageState.education.length) {
    newErrors.education = 'Выберите какое образование кандидата необходимо';
    isValid = false;
  }

  if (!firstPageState.experience) {
    newErrors.experience = 'Опыт работы кандидата не указан';
    isValid = false;
  }

  return { isValid, newErrors };
};

export default hrFormStepOneValidation;

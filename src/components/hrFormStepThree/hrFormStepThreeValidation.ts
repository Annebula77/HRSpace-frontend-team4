import { type ThirdPageFormData } from "../../store/slices/thirdPageSlice";
import { type FormErrors } from "../../types/types";

const hrFormStepThreeValidation = (thirdPageState: ThirdPageFormData): {
  isValid: boolean;
  newErrors: FormErrors
} => {
  let isValid = true;
  const newErrors: FormErrors = {};

  if (!thirdPageState.start_search) {
    newErrors.start_search = "Выберите даты";
    isValid = false;
  }

  if (!thirdPageState.end_search) {
    newErrors.end_search = "Выберите даты";
    isValid = false;
  }

  if (!thirdPageState.payment_model) {
    newErrors.payment_model = "Выберите модель оплаты";
    isValid = false;
  }

  if (thirdPageState.reward && thirdPageState.reward <= thirdPageState.recommendedReward / 2) {
    newErrors.recommendedReward = "Сумма вознаграждения слишком низкая. Такую заявку скорее всего не возьмут в работу.Мы советуем придерживаться рекомендованной суммы";
    isValid = false;
  }

  return { isValid, newErrors };
};

export default hrFormStepThreeValidation;

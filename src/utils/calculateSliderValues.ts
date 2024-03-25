import { parseISO, differenceInDays } from "date-fns";

const calculateSliderValues = (
  minSalary: number,
  maxSalary: number,
  startSearch: string | null,
  endSearch: string | null,
  paymentModel: string,
): { minSliderValue: number; maxSliderValue: number; recommendedValue: number } => {
  let minBaseValue = (minSalary + maxSalary) / 2;
  const modelMultiplier = 3;

  if (paymentModel === "100% за выход сотрудника") {
    minBaseValue = Math.max(minBaseValue, 30000);
  } else if (paymentModel === "50% за выход 50% по окончании испытательного срока") {
    minBaseValue = Math.max(minBaseValue + 20000, 50000);
  } else if (paymentModel === "100% по окончании испытательного срока (1 месяц)") {
    minBaseValue = Math.max(minBaseValue + 40000, 70000);
  } else if (!paymentModel) {
    minBaseValue = Math.max(minBaseValue, 30000);
  }

  if (startSearch && endSearch) {
    const daysDiff = differenceInDays(parseISO(endSearch), parseISO(startSearch));
    if (daysDiff < 7) {
      minBaseValue *= 1.2;
    }
  }

  const maxSliderValue = minBaseValue * modelMultiplier;

  const recommendedValue = (minBaseValue + maxSliderValue) / 2;

  return {
    minSliderValue: Math.round(minBaseValue),
    maxSliderValue: Math.round(maxSliderValue),
    recommendedValue: Math.round(recommendedValue),
  };
};

export default calculateSliderValues;

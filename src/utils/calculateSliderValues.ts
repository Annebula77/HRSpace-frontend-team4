import { parseISO, differenceInDays } from 'date-fns';

const calculateSliderValues = (
  minSalary: number,
  maxSalary: number,
  startSearch: string | null,
  endSearch: string | null,
  paymentModel: string,
): { minSliderValue: number; maxSliderValue: number; recommendedValue: number } => {
  let minBaseValue = 30000;
  const modelMultiplier = 2;

  if (paymentModel === '50% за выход 50% по окончании испытательного срока') {
    minBaseValue = 50000;
  } else if (paymentModel === '100% по окончании испытательного срока (1 месяц)') {
    minBaseValue = 70000;
  }

  let recommendedValue = (minSalary + maxSalary) / 2;
  if (startSearch && endSearch) {
    const daysDiff = differenceInDays(parseISO(endSearch), parseISO(startSearch));
    if (daysDiff < 7) {
      recommendedValue *= 1.2;
    }
  }

  const maxSliderValue = maxSalary * modelMultiplier;

  return {
    minSliderValue: Math.round(minBaseValue),
    maxSliderValue: Math.round(maxSliderValue),
    recommendedValue: Math.round(recommendedValue),
  };
};

export default calculateSliderValues;

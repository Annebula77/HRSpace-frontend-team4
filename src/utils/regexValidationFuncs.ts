export const isValidText = (value: string): boolean => /^[а-яА-ЯёЁa-zA-Z\- ]+$/.test(value);

export const isValidNumber = (value: number): boolean => /^\d+$/.test(String(value));

export const isValidTextAndNumbers = (value: string) => {
  const regex = /^[a-zA-Zа-яА-Я0-9\s.,!?;:()-]+$/;

  return regex.test(value);
};

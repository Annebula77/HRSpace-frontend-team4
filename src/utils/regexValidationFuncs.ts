export const isValidText = (value: string): boolean => /^[а-яА-ЯёЁa-zA-Z\- ]+$/.test(value);

export const isValidNumber = (value: number): boolean => /^\d+$/.test(String(value));

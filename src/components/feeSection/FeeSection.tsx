import { useState, type FC } from 'react';
import InputWithText from '../inputWithText/InputWithText';
import FeeSlider from '../feeSlider/FeeSlider';
import ErrorMessage from '../errorText/errorText';
import { StyledFeeSection, StyledInputWrapper } from './feeSectionStyles';

interface FeeSectionProps {
  minValue: number;
  maxValue: number;
  recommendedValue: number;
  isError: boolean;
  onChange: (newValue: number) => void;
  errorMessage?: string;
}

const FeeSection: FC<FeeSectionProps> = ({
  minValue,
  maxValue,
  recommendedValue,
  isError,
  onChange,
  errorMessage,
}) => {
  const [sliderValue, setSliderValue] = useState<number>(recommendedValue);
  const handleSliderChange = (_event: Event, newValue: number | number[]): void => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    setSliderValue(value);
    onChange(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(event.target.value, 10);

    if (!Number.isNaN(value) && value >= minValue && value <= maxValue) {
      setSliderValue(value);
      onChange(value);
    }
  };

  const handleInputBlur = (): void => {
    if (sliderValue < minValue) {
      setSliderValue(minValue);
      onChange(minValue);
    } else if (sliderValue > maxValue) {
      setSliderValue(maxValue);
      onChange(maxValue);
    }
  };
  return (
    <StyledFeeSection>
      <StyledInputWrapper>
        <InputWithText
          name="sliderValue"
          placeholder="Введите значение"
          value={sliderValue.toString()}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          error={isError || undefined}
        />
        <span>рублей</span>

      </StyledInputWrapper>
      <ErrorMessage errorText={errorMessage} />

      <FeeSlider
        sliderValue={sliderValue}
        onChange={handleSliderChange}
        minValue={minValue}
        maxValue={maxValue}
        recommendedValue={recommendedValue}
        isError={isError}
      />
    </StyledFeeSection>
  );
};

export default FeeSection;

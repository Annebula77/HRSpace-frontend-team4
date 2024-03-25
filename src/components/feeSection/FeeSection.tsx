import { useState, type FC } from 'react';
import styled from 'styled-components';
import InputWithText from '../inputWithText/InputWithText';
import FeeSlider from '../feeSlider/FeeSlider';
import ErrorMessage from '../errorText/errorText';

interface FeeSectionProps {
  minValue: number;
  maxValue: number;
  recommendedValue: number;
  isError: boolean;
  onChange: (newValue: number) => void;
  errorMessage?: string;
}

const StyledFeeSection = styled.section`
    width: 100%;
    display:flex;
    flex-direction: column;
    margin: 0 0 86px;
    box-sizing: border-box;
  `;

const StyledInputWrapper = styled.div`
  width: 170px;
  height: 48px;
  display:flex;
  align-items: center;
  margin: 0 0 12px 0;
  padding: 0;
  box-sizing: border-box;

  & span {
    margin: 0 0 0 7px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    padding-left: 12px;
    color: rgba(110, 113, 115, 1);
  }
`;

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

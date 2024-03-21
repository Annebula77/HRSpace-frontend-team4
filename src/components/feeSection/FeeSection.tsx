import { type FC, useState } from 'react';
import styled from 'styled-components';
import InputWithText from '../inputWithText/InputWithText';
import FeeSlider from '../feeSlider/FeeSlider';

interface FeeSectionProps {
  model: string,
  minSalaryValue: string,
  maxSalaryValue: string,
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
  model,
  minSalaryValue,
  maxSalaryValue,
}) => {
  // NOTE: Заглушки для расчета граничных значений слайдера и рекомендованного значения
  const calculateMinSliderValue = () => {
    switch (model) {
      case 'model 1':
        return 30000;
      case 'model 2':
        return 50000;
      case 'model 3':
        return 70000;
      default:
        return 30000;
    }
  };
  const calculateMaxSliderValue = () => parseInt(maxSalaryValue, 10) * 3;
  const calculateRecommendedValue = () => (
    parseInt(minSalaryValue, 10) + parseInt(maxSalaryValue, 10)) / 2;

  //  NOTE: Стейт переменные
  const [sliderValue, setSliderValue] = useState(calculateRecommendedValue);
  const [error, setError] = useState(false);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
    setError(false);
  };

  const handleInputChange = (event: { target: { value: string; }; }) => {
    const newValue = event.target.value;
    setSliderValue(parseInt(newValue, 10));
    if (parseInt(newValue, 10) < calculateMinSliderValue()) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleBlur = () => {
    if (sliderValue < calculateMinSliderValue()) {
      setSliderValue(calculateMinSliderValue);
    } else if (sliderValue > calculateMaxSliderValue()) {
      setSliderValue(calculateMaxSliderValue);
    }
  };

  return (
    <StyledFeeSection>
      <StyledInputWrapper>
        <InputWithText
          onChange={handleInputChange}
          name="имя"
          value={sliderValue.toString()} //  NOTE: Нужно ли спейсинг в значениях в инпуте?
          placeholder=""
          onBlur={handleBlur}
          error={error}
        />
        <span>рублей</span>
      </StyledInputWrapper>
      <FeeSlider
        onChange={handleSliderChange}
        minValue={calculateMinSliderValue()}
        maxValue={calculateMaxSliderValue()}
        label={calculateRecommendedValue()}
        recommendedValue={calculateRecommendedValue()}
        sliderValue={sliderValue}
        isError={error}
      />
    </StyledFeeSection>
  );
};

export default FeeSection;

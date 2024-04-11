import { useMemo, type FC } from 'react';
import Box from '@mui/material/Box';
import SliderIcon from '../icons/SliderIcon';
import { Slider, StyledSubTitle, StyledValueText } from './feeSliderStyles';

interface SliderProps {
  onChange: (event: Event, value: number | number[]) => void;
  minValue: number;
  maxValue: number;
  recommendedValue: number;
  sliderValue: number;
  isError: boolean;
}

const FeeSlider: FC<SliderProps> = ({
  onChange,
  minValue,
  maxValue,
  recommendedValue,
  sliderValue,
  isError,
}) => {
  const numberWithSpaces = (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const marks = useMemo(() => [
    { value: minValue, label: `${numberWithSpaces(minValue)} руб.` },
    { value: recommendedValue },
    { value: maxValue, label: `${numberWithSpaces(maxValue)} руб.` },
  ], [minValue, maxValue, recommendedValue]);

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ width: '100%' }}
      >
        <Slider
          value={sliderValue}
          onChange={onChange}
          aria-label="Custom marks"
          slots={{ thumb: SliderIcon }}
          min={minValue}
          max={maxValue}
          step={100}
          valueLabelDisplay="off"
          marks={marks}
          $isError={isError}
        />
        <StyledValueText>
          {numberWithSpaces(recommendedValue)}
        </StyledValueText>
        <StyledSubTitle>(рекомендуемая сумма)</StyledSubTitle>
      </Box>
    </div>
  );
};

export default FeeSlider;

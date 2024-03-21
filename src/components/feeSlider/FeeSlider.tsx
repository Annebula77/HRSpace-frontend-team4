import { type FC } from 'react';
import styledComponent from 'styled-components';
import Box from '@mui/material/Box';
import MuiSlider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import SliderIcon from '../icons/SliderIcon';

interface SliderProps {
  onChange: (event: Event, value: number | number[]) => void;
  minValue: number;
  maxValue: number;
  recommendedValue: number;
  sliderValue: number;
  label: number;
  isError: boolean;
}

const Slider = styled(MuiSlider)(({ isError }:
  { isError: boolean }) => ({
    color: 'rgba(23, 133, 229, 1)',
    height: 6,
    margin: 0,
    padding: '14px 0',
    '& .MuiSlider-thumb': {
      height: 34,
      width: 34,
      backgroundColor: '#fff',
      '& svg': {
        height: 34,
        width: 34,
      },
    },
    '& .MuiSlider-track': {
      height: 6,
    },
    '& .MuiSlider-rail': {
      color: isError ? 'rgba(235, 107, 107, 1)' : 'rgba(217, 224, 240, 1)',
      height: 6,
    },
    '& .MuiSlider-mark': {
      color: 'rgba(34, 34, 34, 1)',
      width: 4,
      height: 4,
      borderRadius: 2,
      boxSizing: 'border-box',
    },

    '& .MuiSlider-mark[data-index="0"]': {
      marginLeft: '1px',
    },

    '& .MuiSlider-markLabel': {
      margin: '4px 0 0',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0px',
      textAlign: 'left',
    },
    '& .MuiSlider-markLabel[data-index="0"]': {
      transform: 'translateX(0%)',
    },
    '& .MuiSlider-markLabel[data-index="2"]': {
      transform: 'translateX(-100%)',
    },
  }));

const StyledValueText = styledComponent.p`
  margin: 0;
  padding: -12px;
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
`;

const StyledSubTitle = styledComponent.span`
  margin: 0;
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  `;

const FeeSlider: FC<SliderProps> = ({
  onChange,
  minValue,
  maxValue,
  recommendedValue,
  sliderValue,
  label,
  isError,
}) => {
  const numberWithSpaces = (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const marks = [
    {
      value: minValue,
      label: `${numberWithSpaces(minValue)}`,
    },
    {
      value: recommendedValue,
      label: `${numberWithSpaces(label)}`,
    },
    {
      value: maxValue,
      label: `${numberWithSpaces(maxValue)}`,
    },
  ];

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
          // getAriaValueText={valuetext}
          step={100}
          valueLabelDisplay="off"
          marks={marks}
          isError={isError}
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

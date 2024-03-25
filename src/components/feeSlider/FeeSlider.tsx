import { useMemo, type FC } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import MuiSlider from "@mui/material/Slider";
import SliderIcon from "../icons/SliderIcon";

interface SliderProps {
  onChange: (event: Event, value: number | number[]) => void;
  minValue: number;
  maxValue: number;
  recommendedValue: number;
  sliderValue: number;
  isError: boolean;
}

const Slider = styled(MuiSlider) <{ $isError: boolean }>`
${({ $isError }) => `
    color: rgba(23, 133, 229, 1);
    height: 6px;
    margin: 0;
    padding: 14px 0;

    & .MuiSlider-thumb {
      height: 34px;
      width: 34px;
      background-color: #fff;

      & svg {
        height: 34px;
        width: 34px;
      }
    }

    & .MuiSlider-track {
      height: 6px;
    }

    & .MuiSlider-rail {
      color: ${$isError ? "rgba(235, 107, 107, 1)" : "rgba(217, 224, 240, 1)"};
      height: 6px;
    }

    & .MuiSlider-mark {
      color: rgba(34, 34, 34, 1);
      width: 4px;
      height: 4px;
      border-radius: 2px;
      box-sizing: border-box;
    }

    & .MuiSlider-mark[data-index="0"] {
      margin-left: 1px;
    }

    & .MuiSlider-markLabel {
      margin: 4px 0 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
    }

    & .MuiSlider-markLabel[data-index="0"] {
      transform: translateX(0%);
    }

    & .MuiSlider-markLabel[data-index="2"] {
      transform: translateX(-100%);
    }
  `}
`;

const StyledValueText = styled.p`
  margin: 0;
  padding: -12px;
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
`;

const StyledSubTitle = styled.span`
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
  isError,
}) => {
  const numberWithSpaces = (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

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
        sx={{ width: "100%" }}
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

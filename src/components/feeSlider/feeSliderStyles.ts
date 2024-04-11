import styled from 'styled-components';
import MuiSlider from '@mui/material/Slider';

export const Slider = styled(MuiSlider) <{ $isError: boolean }>`
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
      color: ${$isError ? 'rgba(235, 107, 107, 1)' : 'rgba(217, 224, 240, 1)'};
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

export const StyledValueText = styled.p`
  margin: 0;
  padding: -12px;
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
`;

export const StyledSubTitle = styled.span`
  margin: 0;
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  `;
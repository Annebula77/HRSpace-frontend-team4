import { SliderThumb } from '@mui/material/Slider';
import { type FC } from 'react';

interface SliderThumbComponentProps extends React.HTMLAttributes<unknown> {}

const SliderIcon: FC<SliderThumbComponentProps> = (props) => {
  const { children, ...other } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SliderThumb {...other}>
      {children}
      <svg
        width="34"
        height="34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="34"
          height="34"
          rx="17"
          fill="#303233"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={`M14.704 10.293a.992.992 0 0 1 0 1.414L9.44 17l5.264 5.293a.992.992
          0 0 1 0 1.414c-.395.39-1.035.39-1.43 0l-5.978-6a.992.992 0 0 1
          0-1.414l5.978-6a1.019 1.019 0 0 1 1.43 0ZM19.296 23.707a.992.992 0 0 1
          0-1.414L24.56 17l-5.264-5.293a.992.992 0 0 1 0-1.414 1.019 1.019 0 0 1
          1.43 0l5.978 6a.992.992 0 0 1 0 1.414l-5.978 6c-.395.39-1.035.39-1.43 0Z`}
          fill="#fff"
        />
      </svg>
    </SliderThumb>
  );
};

export default SliderIcon;

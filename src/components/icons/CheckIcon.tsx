import { type FC } from 'react';


interface Props {
  className?: string;
  style?: Record<string, string>;
}

const CheckIcon: FC<Props> = ({ style, className }) => {
  return (
    <svg
      width="26"
      height="18"
      viewBox="0 0 26 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <path
        d="M1.66602 9L9.21268 16.5467L24.3327 1.45334"
        stroke="rgba(255,255,255, 1)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;

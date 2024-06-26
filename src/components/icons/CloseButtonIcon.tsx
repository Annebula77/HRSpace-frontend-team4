import { type FC } from 'react';

interface Props {
  className?: string;
  style?: Record<string, string>;
}

const CloseButtonIcon: FC<Props> = ({ style, className }) => (
  <svg
    width="32"
    height="32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
  >
    <path
      fill="#000"
      d="M7.16 9.282 9.28 7.161l15.556 15.556-2.121 2.122z"
    />
    <path
      fill="#000"
      d="m22.717 7.161 2.121 2.122L9.282 24.839l-2.121-2.121z"
    />
  </svg>
);

export default CloseButtonIcon;

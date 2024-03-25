import { type FC } from 'react';

interface Props {
  style?: Record<string, string>;
  fill?: string;
}

const CloseIcon: FC<Props> = ({ style, fill = 'rgb(48, 50, 51)' }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <g id="trailing-icon">
      <path
        id="icon"
        d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
        fill={fill}
      />
    </g>
  </svg>
);

export default CloseIcon;

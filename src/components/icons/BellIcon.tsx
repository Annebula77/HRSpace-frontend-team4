import { type FC } from 'react';

interface Props {
  width: number;
  height: number;
  color?: string;
}

const BellIcon: FC<Props> = ({ width, height, color = '#fff' }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d={`M6.009 22.342c.428-2.013 2.673-3.28 2.55-7.62C8.432 10.215
      11.717 6 15.002 6c3.283 0 6.568 4.215 6.44 8.722-.125 4.34
      2.122 5.607 2.55 7.62.47 2.21-18.452 2.21-17.982 0Z`}
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      clipRule="evenodd"
      d="M17 4a1.999 1.999 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path d="M18 24a3 3 0 1 1-6 0" stroke={color} strokeWidth="1.5" />
  </svg>
);

export default BellIcon;

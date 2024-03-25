import { type FC } from 'react';

interface Props {
  className?: string;
  style?: Record<string, string>;
}

const SmallFileIcon: FC<Props> = ({ style, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="28"
    viewBox="0 0 22 28"
    fill="none"
    style={style}
    className={className}
  >
    <path d="M3 28H19C20.6569 28 22 26.6569 22 25V8L14 0H3C1.34315 0 0 1.34315 0 3V25C0 26.6569 1.34315 28 3 28Z" fill="#D9E0F0" />
    <path d="M14 6V0L22 8H16C14.8954 8 14 7.10457 14 6Z" fill="#7185A7" />
  </svg>
);

export default SmallFileIcon;

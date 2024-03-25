import { type FC } from "react";

interface Props {
  className?: string;
  style?: Record<string, string>;
}

const OpenSelectIcon: FC<Props> = ({ style, className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
  >

    <path
      d="M4 6L8 10L12 6H4Z"
      fill="rgba(48, 50, 51, 1)"
    />
  </svg>
);

export default OpenSelectIcon;

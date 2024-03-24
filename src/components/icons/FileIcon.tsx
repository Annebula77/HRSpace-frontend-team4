import { type FC } from 'react';

interface Props {
  className?: string;
  style?: Record<string, string>;
}

const FileIcon: FC<Props> = ({ style, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="61"
    height="61"
    viewBox="0 0 61 61"
    fill="none"
    style={style}
    className={className}
  >
    <path
      d="M47 56.5H13C11.067 56.5 9.5 54.933 9.5 53V8.00006C9.5 6.06706 11.067
     4.50006 13 4.50006H37.7929L50.5 17.2071V53C50.5 54.933 48.933 56.5 47 56.5Z"
      stroke="#BABDBF"
    />
    <path d="M37 16V4L51 18H39C37.8954 18 37 17.1046 37 16Z" fill="#BABDBF" />
    <path d="M30 40V24M30 24L25 28.9091M30 24L35 28.9091" stroke="#BABDBF" strokeWidth="2" />
  </svg>
);

export default FileIcon;

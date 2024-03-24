import { type FC } from 'react';

interface Props {
  className?: string;
  style?: Record<string, string>;
}

// const style = {
//   margin: 0,
//   top: 'auto',
//   right: 20,
//   bottom: 20,
//   left: 'auto',
//   position: 'fixed',
// };

const PrintIcon : FC<Props> = ({ style, className }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
  >
    <path
      d={`M6 8V3a1 1 0 0 1 1-1h7.586a1 1 0 0 1 .707.293l2.414 2.414a1
        1 0 0 1 .293.707V8h2a3 3 0 0 1 3 3v5a2 2 0 0 1-2 2h-1v-6H4v6H3a2 2
        0 0 1-2-2v-5a3 3 0 0 1 3-3h2Z`}
      fill="#fff"
    />
    <path
      d={`M17 14H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0
        0 0-1-1Z`}
      fill="#fff"
    />
  </svg>

);

export default PrintIcon;

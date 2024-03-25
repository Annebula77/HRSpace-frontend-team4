import { type FC } from 'react';

interface Props {
  width: number;
  height: number;
}

const VkLinkIcon: FC<Props> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M13.065 19C5.399 19 1.027 13.745.845 5h3.84c.125 6.418 2.956 9.137 5.198
        9.698V5H13.5v5.536c2.214-.239 4.54-2.761 5.325-5.536h3.616c-.603 3.42-3.125
        5.942-4.919 6.979 1.794.84 4.667 3.041 5.76
        7.021H19.3c-.855-2.663-2.985-4.723-5.802-5.003V19h-.434Z`}
      fill="#000"
    />
  </svg>
);

export default VkLinkIcon;

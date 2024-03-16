import { type FC } from 'react';

interface Props {
  width: number;
  height: number;
}

const OkLinkIcon: FC<Props> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={`M11.67 12.329a5.03 5.03 0 0 1-3.565-1.509A5.191 5.191 0 0 1 6.62 7.2 5.257
        5.257 0 0 1 8.1 3.552 5.095 5.095 0 0 1 11.669 2a4.974 4.974 0 0 1 1.95.395 5.038
        5.038 0 0 1 1.647 1.13c.47.484.84 1.058 1.09 1.69.25.63.372 1.305.362
        1.985a5.137 5.137 0 0 1-.367 1.973 5.07 5.07 0 0 1-1.093 1.672 4.98 4.98 0 0 1-1.647
        1.11 4.918 4.918 0 0 1-1.942.373Zm0-7.266a2.075 2.075 0 0 0-1.514.65 2.141 2.141
        0 0 0-.59 1.558 2.065 2.065 0 0 0 .61 1.496 2.002 2.002 0 0 0 1.493.57 2.026 2.026
        0 0 0 1.477-.586 2.09 2.09 0 0 0 .627-1.48 2.167 2.167 0 0 0-.59-1.557 2.103 2.103
        0 0 0-1.514-.651Zm2.033 11.54 2.875 2.848a1.462 1.462 0 0 1 .421 1.033 1.48 1.48 0 0
        1-.421 1.033A1.327 1.327 0 0 1 15.56 22a1.307 1.307 0 0
        1-1.017-.483l-2.875-2.849-2.805 2.85a1.4 1.4 0 0 1-1.052.427 1.669 1.669 0 0
        1-1.051-.428 1.462 1.462 0 0 1-.422-1.033 1.48 1.48 0 0
        1 .422-1.033l2.945-2.849A14.467 14.467 0 0 1 6.69 15.25a1.553 1.553 0 0
        1-.647-.934 1.574 1.574 0 0 1 .157-1.132 1.493 1.493 0 0 1 .961-.672 1.457 1.457
        0 0 1 1.142.245 6.508 6.508 0 0 0 3.401.961 6.508 6.508 0 0 0 3.401-.961 1.47 1.47
        0 0 1 1.142-.245 1.466 1.466 0 0 1 .962.672c.199.335.266.734.188 1.117a1.555 1.555 0
        0 1-.609.949c-.976.566-2.01 1.02-3.085 1.353Z`}
      fill="#000"
    />
  </svg>
);

export default OkLinkIcon;
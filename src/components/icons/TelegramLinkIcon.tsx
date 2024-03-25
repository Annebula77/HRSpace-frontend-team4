import { type FC } from "react";

interface Props {
  width: number;
  height: number;
}

const TelegramLinkIcon: FC<Props> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M.307 11.85c2.077-1.193 4.396-2.19 6.563-3.19 3.728-1.64
      7.47-3.25 11.25-4.75.737-.257 2.058-.506 2.188.63-.071
      1.61-.363 3.209-.564 4.808-.508 3.518-1.095 7.022-1.668 10.529-.197
      1.168-1.6 1.772-2.498
      1.024-2.157-1.52-4.33-3.023-6.46-4.578-.698-.74-.05-1.801.572-2.328
      1.777-1.826 3.661-3.378 5.345-5.298.455-1.144-.888-.18-1.33.116-2.433
      1.747-4.806 3.602-7.37
      5.137-1.31.753-2.837.11-4.147-.31-1.174-.506-2.894-1.017-1.881-1.79Z`}
      fill="#000"
    />
  </svg>
);

export default TelegramLinkIcon;

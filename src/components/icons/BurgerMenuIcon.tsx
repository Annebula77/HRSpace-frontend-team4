import { type FC } from "react";

interface Props {
  onClick: () => void;
  className?: string;
  style?: Record<string, string>;
}

const BurgerMenuIcon: FC<Props> = ({ onClick, style, className }) => (
  <svg
    width="44"
    height="44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={style}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36 14H8v-3h28v3ZM36 24H8v-3h28v3ZM36 34H8v-3h28v3Z"
      fill="#fff"
    />
  </svg>
);

export default BurgerMenuIcon;

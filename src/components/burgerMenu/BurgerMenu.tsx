import { type FC, useEffect } from "react";
import styled from "styled-components";

import HeaderUserInfo from "../headerUserInfo/HeaderUserInfo";
import CloseButtonIcon from "../icons/CloseButtonIcon";

interface BurgerMenuProps {
  isOpen: boolean,
  onClose: () => void,
}

interface OverlayProps {
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void,
  isOpen: boolean,
  children: React.ReactNode,
}

interface ButtonProps {
  $primary?: boolean;
}

const StyledBurgerMenuOverlay: FC<OverlayProps> = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: visibility 0.3s, opacity 0.3s linear;
  z-index: 2;
`;

const StyledBurgerMenuContent = styled.div`
  margin: 0;
  width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  z-index: 3;
 

  & button {
    align-self: flex-end;
    margin: 15px 0 0;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: opacity 0.1s;
  }

  & button:hover {
    opacity: 0.6;
  }
`;

const StyledList = styled.ul<ButtonProps>`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & li {
    padding: 0;
    margin: 0;
    list-style: none;
    }

  & li:last-child {
    margin: 0;
  }
`;

const StyledNavButton = styled.button<ButtonProps>`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: ${({ $primary }) => ($primary ? "700" : "400")};
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [isOpen, onClose]);

  return (
    <StyledBurgerMenuOverlay
      onClick={(event: React.MouseEvent<Element, MouseEvent>) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      isOpen={isOpen}
      aria-hidden="true"
    >
      <StyledBurgerMenuContent>
        <button id="close-button" type="button" onClick={onClose} aria-label="close-button">
          <CloseButtonIcon />
        </button>
        <HeaderUserInfo isBurgerMenu />
        <nav>
          <StyledList>
            <li>
              <StyledNavButton type="button" $primary>Создать заявку</StyledNavButton>
            </li>
            <li>
              <StyledNavButton type="button">Мои заявки</StyledNavButton>
            </li>
            <li>
              <StyledNavButton type="button">Поиск по рынку</StyledNavButton>
            </li>
            <li>
              <StyledNavButton type="button">Счёт</StyledNavButton>
            </li>
            <li>
              <StyledNavButton type="button">Помощь</StyledNavButton>
            </li>
          </StyledList>
        </nav>
      </StyledBurgerMenuContent>
    </StyledBurgerMenuOverlay>
  );
};

export default BurgerMenu;

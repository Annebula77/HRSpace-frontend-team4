import { type FC } from 'react';
import styled from 'styled-components';
import { type BurgerMenuProps } from './BurgerMenu';



export const StyledBurgerMenuOverlay: FC<BurgerMenuProps> = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: visibility 0.3s, opacity 0.3s linear;
  z-index: 2;
`;

export const StyledBurgerMenuContent = styled.div`
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

export const StyledList = styled.ul<BurgerMenuProps>`
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

export const StyledNavButton = styled.button<BurgerMenuProps>`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: ${({ $primary }) => ($primary ? '700' : '400')};
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

import { type FC, useEffect } from 'react';

import HeaderUserInfo from '../headerUserInfo/HeaderUserInfo';
import CloseButtonIcon from '../icons/CloseButtonIcon';
import { StyledBurgerMenuContent, StyledBurgerMenuOverlay, StyledList, StyledNavButton } from './burgerMenuStyles';

export interface BurgerMenuProps {
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void,
  isOpen?: boolean,
  onClose?: () => void,
  children?: React.ReactNode,
  $primary?: boolean;
}



const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen, onClose]);

  return (
    <StyledBurgerMenuOverlay
      onClick={(event: React.MouseEvent<Element, MouseEvent>) => {
        if (event.target === event.currentTarget && onClose) {
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

import { useState, useEffect } from 'react';
import styled from 'styled-components';

import useResize from '../../hooks/useResize';
import breakpoints, { media } from '../../styles/breakpoints';

import HrSpaceLogo from '../icons/HrSpaceLogo';
import BurgerMenuIcon from '../icons/BurgerMenuIcon';
import HeaderNavigation from '../headerNavigation/HeaderNavigation';
import HeaderUserInfo from '../headerUserInfo/HeaderUserInfo';
import BurgerMenu from '../burgerMenu/BurgerMenu';

const StyledHeader = styled.header`
  width: 100%;
  box-sizing: border-box;
  height: 74px;
  padding: 0 68px;
  margin: 0 ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 0);

  ${media.lg`
    padding: 0 86px;
  `}

  ${media.xl`
    padding: 0 96px;
  `}
`;

const StyledLogoWrapper = styled.div`
  margin: 0;

  ${media.lg`
    margin-right: calc(224px - 138px);
  `}
`;

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const width = useResize();
  console.log(width);

  // NOTE: ОБРАБОТЧИКИ КНОПОК ОТКРЫТИЯ И ЗАКРЫТИЯ БУРГЕР-МЕНЮ
  // NOTE: Обработчик открытия бургер-меню
  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(true);
  };

  // NOTE: Обработчик закрытия бургер-меню
  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  useEffect(() => {
    if (width < parseInt(breakpoints.md, 10)) return;
    closeBurgerMenu();
  });

  if (width > parseInt(breakpoints.md, 10)) {
    return (
      <StyledHeader>
        <StyledLogoWrapper>
          <HrSpaceLogo width={138} height={46} />
        </StyledLogoWrapper>
        <HeaderNavigation />
        <HeaderUserInfo isBurgerMenu={false} />
      </StyledHeader>
    );
  }
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <HrSpaceLogo width={138} height={46} />
      </StyledLogoWrapper>
      <BurgerMenuIcon onClick={handleBurgerMenuClick} />
      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        onClose={closeBurgerMenu}
      />
    </StyledHeader>
  );
};

export default Header;

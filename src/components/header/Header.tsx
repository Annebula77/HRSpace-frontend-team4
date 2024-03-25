import { useState, useEffect } from "react";
import styled from "styled-components";

import useResize from "../../hooks/useResize";
import breakpoints, { media } from "../../styles/breakpoints";

import HrSpaceLogo from "../icons/HrSpaceLogo";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import HeaderNavigation from "../headerNavigation/HeaderNavigation";
import HeaderUserInfo from "../headerUserInfo/HeaderUserInfo";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const StyledHeader = styled.header`
  width: 100%;
  box-sizing: border-box;
  height: 74px;
  padding: 0;
  margin: 0 ;
  display: flex;
  background-color: rgb(0, 0, 0);
`;

const StyledHeaderContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        <StyledHeaderContent>
          <StyledLogoWrapper>
            <HrSpaceLogo width={138} height={46} />
          </StyledLogoWrapper>
          <HeaderNavigation />
          <HeaderUserInfo isBurgerMenu={false} />
        </StyledHeaderContent>
      </StyledHeader>
    );
  }
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledLogoWrapper>
          <HrSpaceLogo width={138} height={46} />
        </StyledLogoWrapper>
        <BurgerMenuIcon onClick={() => {
          setIsBurgerMenuOpen(true);
        }}
        />
        <BurgerMenu
          isOpen={isBurgerMenuOpen}
          onClose={closeBurgerMenu}
        />
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;

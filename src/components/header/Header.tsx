import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import HrSpaceLogo from '../icons/HrSpaceLogo';
import HeaderNavigation from '../headerNavigation/HeaderNavigation';
import HeaderUserInfo from '../headerUserInfo/HeaderUserInfo';

const StyledHeader = styled.header`
  width: 100%;
  box-sizing: border-box;
  height: 74px;
  padding: 0 96px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 0);
`;

const StyledLogoWrapper = styled.div`
  margin-right: calc(224px - 138px);
`;

const Header = () => (
  <StyledHeader>
    {/* <Link to="/"> */}
    <StyledLogoWrapper>
      <HrSpaceLogo width={138} height={46} />
    </StyledLogoWrapper>
    {/* </Link> */}
    <HeaderNavigation />
    <HeaderUserInfo />
  </StyledHeader>
);

export default Header;

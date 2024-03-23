import { type FC } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

import avatar from '../../assets/images/header_user_ava_vk.png';
import BellIcon from '../icons/BellIcon';

interface Props {
  isBurgerMenu: boolean,
}

interface UserNameProps {
  isBurgerMenu: boolean,
  children: string,
}

const StyledUserInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  /* background-color: #000000; */

  ${media.lg`
    margin: 0 0 0 10px;
  `}
`;
const StyledUserDetails = styled.div`
  margin-left: 16px;
  display: flex;
`;

const StyledUserAvatar = styled.img`
  display: block;
  width: 40px;
  height: 100%;
  margin: 2px 0;
  /* padding: 2px 0; */
  background-size: cover;
  box-sizing: border-box;
  border-radius: 50%;
`;

const StyledUserNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  box-sizing: border-box;
`;

const StyledUserName: FC<UserNameProps> = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => (props.isBurgerMenu ? 'rgba(73, 75, 77, 1)' : 'rgba(255, 255, 255, 1)')};
  display: ${(props) => (props.isBurgerMenu ? 'flex' : 'none')};

  ${media.lg`
    display: flex;
  `}

  ${media.xl`
    font-size: 16px;
    line-height: 24px;
  `}
`;

const StyledUserId: FC<UserNameProps> = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(149, 151, 153, 1);
  display: ${(props) => (props.isBurgerMenu ? 'flex' : 'none')};

  ${media.lg`
    display: flex;
  `}
`;

const bellColor = (isBurgerMenu: boolean) => (isBurgerMenu ? 'rgba(73, 75, 77, 1)' : 'rgba(255, 255, 255, 1)');

const HeaderUserInfo: FC<Props> = ({ isBurgerMenu }) => (
  <StyledUserInfo>
    <BellIcon width={30} height={30} color={bellColor(isBurgerMenu)} />
    <StyledUserDetails>
      <StyledUserAvatar src={avatar} alt="Аватар" />
      <StyledUserNameWrapper>
        <StyledUserName isBurgerMenu={isBurgerMenu}>Виталий Крымов</StyledUserName>
        <StyledUserId isBurgerMenu={isBurgerMenu}>#45732</StyledUserId>
      </StyledUserNameWrapper>
    </StyledUserDetails>
  </StyledUserInfo>
);

export default HeaderUserInfo;

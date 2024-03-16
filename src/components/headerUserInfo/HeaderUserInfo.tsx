import styled from 'styled-components';

import avatar from '../../assets/images/header_user_ava_vk.png';
import BellIcon from '../icons/BellIcon';

const StyledUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;
const StyledUserDetails = styled.div`
  /* height: 44px; */
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
`;

const StyledUserName = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;

const StyledUserId = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(149, 151, 153, 1);
`;

const HeaderUserInfo = () => (
  <StyledUserInfo>
    <BellIcon width={30} height={30} />
    <StyledUserDetails>
      <StyledUserAvatar src={avatar} alt="Аватар" />
      <StyledUserNameWrapper>
        <StyledUserName>Виталий Крымов</StyledUserName>
        <StyledUserId>#45732</StyledUserId>
      </StyledUserNameWrapper>
    </StyledUserDetails>
  </StyledUserInfo>
);

export default HeaderUserInfo;

import styled from 'styled-components';

const StyledContactslist = styled.ul`
  width: 100%;
  margin: 0 auto 40px;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledContactElement = styled.li`
  display: flex;
  margin: 0;
  list-style: none;
`;

const StyledContactDetails = styled.div`
  margin-right: 8px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(48, 50, 51, 1);
`;

const StyledPhoneNumber = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(48, 50, 51, 0.4);
`;

const FooterContactsList = () => (
  <StyledContactslist>
    <StyledContactElement>
      <StyledContactDetails>Москва и область</StyledContactDetails>
      <StyledPhoneNumber>+7 495 974-64-27</StyledPhoneNumber>
    </StyledContactElement>
    <StyledContactElement>
      <StyledContactDetails>Санкт-Петербург и область</StyledContactDetails>
      <StyledPhoneNumber>+7 812 458-45-45</StyledPhoneNumber>
    </StyledContactElement>
    <StyledContactElement>
      <StyledContactDetails>Регионы</StyledContactDetails>
      <StyledPhoneNumber>8 800 100-64-27</StyledPhoneNumber>
    </StyledContactElement>
    <StyledContactElement>
      <StyledContactDetails>hrspace@hh.ru</StyledContactDetails>
    </StyledContactElement>
  </StyledContactslist>
);

export default FooterContactsList;

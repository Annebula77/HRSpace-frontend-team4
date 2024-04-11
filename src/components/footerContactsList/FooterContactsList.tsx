import { StyledContactDetails, StyledContactElement, StyledContactsList, StyledPhoneNumber } from "./footerContactListStyles";

const FooterContactsList = () => (
  <StyledContactsList>
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
  </StyledContactsList>
);

export default FooterContactsList;

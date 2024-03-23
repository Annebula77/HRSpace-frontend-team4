import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

const StyledContactsList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.md`
    margin-left: 20px;
  `}

  ${media.lg`
    margin: 0 40px;
    flex-direction: row;
    justify-content: space-between;
  `}


`;

const StyledContactElement = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  margin: 0 12px 0 0;
  list-style: none;

  ${media.xs`
    flex-direction: column;
    /* justify-content: space-between; */
  `}

  ${media.lg`
    flex-direction: column;
    /* justify-content: space-between; */
  `}

  ${media.xl`
    flex-direction: row;
    /* justify-content: space-between; */
  `}
`;

const StyledContactDetails = styled.div`
  margin-right: 8px;
  /* max-width: 50px; */
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(48, 50, 51, 1);
  /* overflow: hidden;
  white-space: nowrap; */

  ${media.md`
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
  `}

  ${media.lg`
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
  `}
`;

const StyledPhoneNumber = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(48, 50, 51, 0.4);

  ${media.md`
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
  `}

  ${media.lg`
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
  `}
`;

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

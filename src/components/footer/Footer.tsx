import styled from 'styled-components';

import FooterContactsList from '../footerContactsList/FooterContactsList';
import FooterLinks from '../footerLinks/FooterLinks';

const StyledFooter = styled.footer`
  width: 100%;
  padding: 40px 96px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(250, 250, 250, 1);
`;

const Footer = () => (
  <StyledFooter>
    <FooterContactsList />
    <FooterLinks />
  </StyledFooter>
);

export default Footer;

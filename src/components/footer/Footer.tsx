import styled from "styled-components";
import { media } from "../../styles/breakpoints";

import FooterContactsList from "../footerContactsList/FooterContactsList";
import FooterLinks from "../footerLinks/FooterLinks";

const StyledFooter = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 0;
  margin: 0;
  display: flex;
  /* flex-direction: column-reverse; */
  /* justify-content: space-between; */
  background-color: rgba(250, 250, 250, 1);
`;

const StyledFooterContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
  gap: 15px;


  ${media.md`
    flex-direction: row-reverse;
    justify-content: space-between;
  `}

  ${media.lg`
    flex-direction: column;
    align-items: center;
    gap: 40px;
  `}
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterContent>
      <FooterContactsList />
      <FooterLinks />
    </StyledFooterContent>
  </StyledFooter>
);

export default Footer;

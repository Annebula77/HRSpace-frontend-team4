import styled from 'styled-components';
import HrSpaceLogo from '../icons/HrSpaceLogo';
import TelegramLinkIcon from '../icons/TelegramLinkIcon';
import VkLinkIcon from '../icons/VkLinkIcon';
import OkLinkIcon from '../icons/OkLinkIcon';

const StyledFooterNavigation = styled.nav`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
  font-family: TWK Lausanne Pan;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(48, 50, 51, 0.4);
  }

  & ul {
    margin: 0;
    display: flex;
    justify-content: center;
  }

  & li {
    padding: 8px;
    margin: 0 8px 0 0;
    list-style: none;
  }

  & li:last-child {
    margin: 0;
  }

  & button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const FooterLinks = () => (
  <StyledFooterNavigation>
    <HrSpaceLogo width={138} height={46} color="rgba(48, 50, 51, 1)" secondaryColor="rgba(48, 50, 51, 1)" />
    <p>© 2022 Группа компаний HeadHunter</p>
    <ul>
      <li>
        <button aria-label='telegram' type="button">
          <TelegramLinkIcon width={24} height={24} />
        </button>
      </li>
      <li>
        <button aria-label='vk' type="button">
          <VkLinkIcon width={24} height={24} />
        </button>
      </li>
      <li>
        <button aria-label='ok' type="button">
          <OkLinkIcon width={24} height={24} />
        </button>
      </li>
    </ul>
  </StyledFooterNavigation>
);

export default FooterLinks;

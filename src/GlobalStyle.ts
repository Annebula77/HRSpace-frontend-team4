import { createGlobalStyle } from 'styled-components';
import { media } from './styles/breakpoints';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    max-width: 1590px;
    margin: 0 auto;    
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: rgba(73, 75, 77, 1);
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ${media.xl`
      font-size: 16px;
    `}
  
  }
`;

export default GlobalStyle;

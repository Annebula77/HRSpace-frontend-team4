import { createGlobalStyle } from 'styled-components';
import { media } from './styles/breakpoints';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;    
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ${media.xl`
      font-size: 16px;
    `}
  
  }
`;

export default GlobalStyle;

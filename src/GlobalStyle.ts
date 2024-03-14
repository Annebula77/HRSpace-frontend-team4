import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;  
    padding: 0;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;   
  }
`;

export default GlobalStyle;

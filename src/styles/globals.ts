import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #222;
    
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100vh;
  }
`;

export default GlobalStyles;

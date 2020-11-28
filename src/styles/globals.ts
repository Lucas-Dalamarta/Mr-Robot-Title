import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100vh;
  }

  body {
    color: #fff;
    font-family: 'MrRobot'
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    height: 100%;
  },
  
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    border: 0;
    cursor: pointer;
  }
  
  ul, li {
    list-style-type: none;
  }
  
  #__next {
    height: 100%;
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
  }
  
  #__next > main {
    flex-grow: 1;
  }
  
  .container {
    width: 100%;
    max-width: 1470px;
    
    margin: 0 auto;
    padding: 0 15px;
  }
`;

export default GlobalStyles;

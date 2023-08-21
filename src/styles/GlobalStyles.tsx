import { createGlobalStyle } from "styled-components";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const GlobalStyles = createGlobalStyle`
  body {
    height: 100%;
   
    color: ${ColorScheme.SECONDARY};
    font-family: SF, sans-serif;
    font-size: 20px;
    font-weight: 400;
    
    background-color: ${ColorScheme.WHITE_TWO};
  }
  
  *, *:after, *:before {
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

    margin: 20px 0;
    
    display: flex;
    flex-direction: column;
    
    @media(max-width: ${Breakpoints.BIG_TABLET}px) {
      margin: 0;
    }
  }
  
  #__next > main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .container {
    width: calc(100% - 32px);
    max-width: 1600px;
    
    margin: 0 auto;
  }
  
  
  .disable-mobile-safe {
    @media(max-width: ${Breakpoints.BIG_TABLET}px) {
      width: 100%;
    }
  }
  
  .content {
    padding: 30px;
    @media(max-width: ${Breakpoints.BIG_TABLET}px) {
      padding: 16px;
    }
  }
  
  .content-bg {
    background-color: ${ColorScheme.WHITE};
    border-radius: 40px;
    
    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      border-radius: 24px;
    }
  }

  .header-hide {
    top: -120px !important;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";
import ColorScheme from "@/styles/theme/ColorScheme";
import SFUIDisplayFont from "@/assets/fonts/SFUIDisplayFont";
import BebasNeueFont from "@/assets/fonts/BebasNeueFont";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const GlobalStyles = createGlobalStyle`
  body {
    height: 100%;
    
    font-family: SF, sans-serif;
    font-size: 20px;
    font-weight: 400;
    
    background-color: ${ColorScheme.BACKGROUND};
  },
  
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
    
    display: flex;
    flex-direction: column;
  }
  
  #__next > main {
    flex-grow: 1;
  }
  
  .container {
    width: calc(100% - 32px);
    max-width: 1600px;
    
    margin: 0 auto;
  }
  
  .mobile-safe {
    @media(max-width: ${Breakpoints.BIG_TABLET}px) {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
  }
  
  .disable-mobile-safe {
    @media(max-width: ${Breakpoints.BIG_TABLET}px) {
      width: 100%;
    }
  }
  
  .header-hide {
    top: -120px !important;
  }
  
  ${BebasNeueFont};
  ${SFUIDisplayFont};
`;

export default GlobalStyles;

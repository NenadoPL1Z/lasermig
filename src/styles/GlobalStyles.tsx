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
    overflow-x: hidden;
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
  
  
  #__next {
    position: relative;
    
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
    margin: 0 auto;
    padding: 50px 0 100px;
    
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      padding: 36px 0 48px;
    }
  }
  
  .container {
    width: 100%;
    max-width: 1632px;
    
    margin: 0 auto;
  }
  
  .padding {
    padding: 0 16px;
  }
  
  .container-two {
    max-width: 1060px;
    margin: 0 auto;
  }

  .container-three {
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
  
  .content-br {
    border-radius: 40px;
    
    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      border-radius: 24px;
    }
  }
  
  .content-title {
    margin-bottom: 16px;
  }

  .content-margin48 {
    margin-bottom: 48px;
  }

  .header-hide {
    top: -120px !important;
  }
`;

export default GlobalStyles;

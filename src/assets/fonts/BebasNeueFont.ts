import { css } from "styled-components";

const BebasNeueFont = css`
  @font-face {
    font-family: "BN";
    src:
      local("Bebas Neue Bold"),
      local("Bebas-Neue-Bold"),
      url("/assets/fonts/BebasNeue/BebasNeueBold.woff2") format("woff2"),
      url("/assets/fonts/BebasNeue/BebasNeueBold.woff") format("woff"),
      url("/assets/fonts/BebasNeue/BebasNeueBold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "BN";
    src:
      local("Bebas Neue Regular"),
      local("Bebas-Neue-Regular"),
      url("/assets/fonts/BebasNeue/BebasNeueRegular.woff2") format("woff2"),
      url("/assets/fonts/BebasNeue/BebasNeueRegular.woff") format("woff"),
      url("/assets/fonts/BebasNeue/BebasNeueRegular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
`;

export default BebasNeueFont;

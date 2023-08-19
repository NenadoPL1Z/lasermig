import { css } from "styled-components";

const SFUIDisplayFont = css`
  @font-face {
    font-family: "SF";
    src:
      local("San Francisco(SF UI) Display Regular"),
      local("San-Francisco(SF-UI)-Display-Regular"),
      url("/assets/fonts/SFUIDisplay/SFUIDisplay-Regular.woff2") format("woff2"),
      url("/assets/fonts/SFUIDisplay/SFUIDisplay-Regular.woff") format("woff"),
      url("/assets/fonts/SFUIDisplay/SFUIDisplay-Regular.ttf")
        format("truetype");
    font-weight: 400;
    font-style: normal;
  }
`;

export default SFUIDisplayFont;

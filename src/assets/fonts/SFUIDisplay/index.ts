import { css } from "styled-components";

const SFUIDisplayFont = css`
  @font-face {
    font-family: "SF";
    src:
      local("San Francisco(SF UI) Display Regular"),
      local("San-Francisco(SF-UI)-Display-Regular"),
      url("SFUIDisplay-Regular.woff2") format("woff2"),
      url("SFUIDisplay-Regular.woff") format("woff"),
      url("SFUIDisplay-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
`;

export default SFUIDisplayFont;

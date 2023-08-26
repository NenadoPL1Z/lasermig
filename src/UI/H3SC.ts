import { css, styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { H2Mixin } from "@/UI/H2SC";

export const H3Mixin = css`
  ${H2Mixin};

  font-size: 28px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
  }
`;

export const H3SC = styled("h3")`
  ${H3Mixin};
`;

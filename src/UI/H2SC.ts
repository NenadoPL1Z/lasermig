import { css, styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { H1Mixin } from "@/UI/H1SC";

export const H2Mixin = css`
  ${H1Mixin};

  font-size: 36px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 32px;
  }
`;

export const H2SC = styled("h2")`
  ${H2Mixin}
`;

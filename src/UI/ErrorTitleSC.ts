import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const ErrorTitleSC = styled("p")`
  color: ${ColorScheme.ERROR};

  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
    margin-bottom: 16px;
  }
`;

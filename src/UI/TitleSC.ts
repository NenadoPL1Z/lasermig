import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const TitleSC = styled("h1")`
  margin: 0;

  color: ${ColorScheme.PRIMARY};
  font-family: ${FontNamespace.BN};
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 32px;
  }
`;

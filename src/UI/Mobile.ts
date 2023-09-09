import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const Mobile = styled("section")`
  @media (min-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const UlSC = styled("ul")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    gap: 16px;
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    grid-template-columns: 1fr;
  }
`;

export const styles = { UlSC };

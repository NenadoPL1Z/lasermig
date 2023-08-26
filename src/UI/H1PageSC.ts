import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { H1SC } from "@/UI/H1SC";

export const H1PageSC = styled(H1SC)`
  margin-top: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 36px;
  }
`;

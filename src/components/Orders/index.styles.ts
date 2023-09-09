import { styled } from "@mui/material";
import { H1SC } from "@/UI/H1SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const TitleSC = styled(H1SC)`
  max-width: 308px;
  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: 288px;
    margin-bottom: 16px;
  }
`;

export const styles = {
  TitleSC,
};

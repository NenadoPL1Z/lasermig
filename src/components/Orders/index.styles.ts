import { styled } from "@mui/material";
import { H1SC } from "@/UI/H1SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const TopSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

const TitleSC = styled(H1SC)`
  max-width: 308px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: 288px;
  }
`;

export const styles = {
  TopSC,
  TitleSC,
};

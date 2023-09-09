import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const DescSC = styled(Typography)`
  max-width: 427px;

  color: ${ColorScheme.PRIMARY};
  margin-bottom: 32px;

  font-size: 20px;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

export const styles = {
  DescSC,
};

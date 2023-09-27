import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";

const DescSC = styled(Typography)`
  max-width: 469px;

  color: ${ColorScheme.PRIMARY};
  margin-bottom: 16px;

  font-size: 20px;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

const ButtonSC = styled(DefaultButton)`
  max-width: 181px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: 91px;
  }
`;

export const styles = {
  DescSC,
  ButtonSC,
};

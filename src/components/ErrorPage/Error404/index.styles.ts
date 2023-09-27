import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";

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

const ButtonSC = styled(DefaultButton)`
  max-width: 238px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: 174px;
  }
`;

export const styles = {
  DescSC,
  ButtonSC,
};

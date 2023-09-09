import { styled } from "@mui/material";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const OutlinedButton = styled(DefaultButton)`
  color: ${ColorScheme.PRIMARY};
  background-color: ${ColorScheme.TRANSPARENT};
  border: 1px solid ${ColorScheme.SECONDARY} !important;

  &:hover {
    color: ${ColorScheme.WHITE};
    fill: ${ColorScheme.WHITE};
    background-color: ${ColorScheme.SECONDARY};
    border: 1px solid ${ColorScheme.TRANSPARENT};

    & > svg > path {
      fill: ${ColorScheme.WHITE};
    }
  }
`;

export const OutlinedButtonRounded = styled(OutlinedButton)`
  width: 64px;
  height: 64px;

  padding: 20px;
  border-radius: 50%;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 40px;
    height: 40px;
    padding: 0 12px;
  }
`;

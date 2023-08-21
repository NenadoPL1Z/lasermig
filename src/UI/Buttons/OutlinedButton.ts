import { styled } from "@mui/material";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import ColorScheme from "@/styles/theme/ColorScheme";

export const OutlinedButton = styled(DefaultButton)`
  color: ${ColorScheme.PRIMARY};
  background-color: ${ColorScheme.WHITE};
  border: 1px solid ${ColorScheme.SECONDARY};

  &:hover {
    color: ${ColorScheme.WHITE};
    background-color: ${ColorScheme.SECONDARY};
    border: 1px solid ${ColorScheme.TRANSPARENT};
  }
`;

export const OutlinedButtonRadius = styled(OutlinedButton)`
  width: 64px;
  height: 64px;

  padding: 20px;
  border-radius: 50%;
`;

import { Button, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const DefaultButton = styled(Button)`
  padding: 20px 40px 16px;

  color: ${ColorScheme.PRIMARY};
  background-color: ${ColorScheme.ACCENT};
  border-radius: 45px;
  box-shadow: none !important;

  font-family: ${FontNamespace.BN};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background-color: ${ColorScheme.ACCENT_2};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${ColorScheme.WHITE};
    background-color: ${ColorScheme.SECONDARY};
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding: 12px 20px 10px;
    font-size: 18px;
  }
`;

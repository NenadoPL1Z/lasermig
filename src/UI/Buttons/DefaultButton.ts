import { Button, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";

export const DefaultButton = styled(Button)`
  padding: 20px 40px 16px;

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
`;

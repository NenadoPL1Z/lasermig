import { Button, styled } from "@mui/material";
import CatalogBackIcon from "assets/icons/CatalogBack.svg";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const BackSC = styled(Button)`
  align-items: center;
  justify-content: flex-start;

  padding: 5px 5px 5px 2px;
  border-radius: 5px;

  color: ${ColorScheme.SECONDARY};

  font-family: ${FontNamespace.BN};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 18px;
    padding: 2px 2px 2px 0;
    border-radius: 2px;
  }
`;

const BackIconSC = styled(CatalogBackIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 16px;
    height: 16px;
  }
`;

export const styles = {
  BackSC,
  BackIconSC,
};

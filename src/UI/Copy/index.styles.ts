import { Button, styled } from "@mui/material";
import SharedIcon from "@/assets/icons/SharedIcon.svg";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";

const ContainerSC = styled("div")`
  position: relative;
`;

const CopyButtonSC = styled(Button)`
  color: ${ColorScheme.WHITE};
  font-family: ${FontNamespace.BN};

  border-radius: 5px;
  align-items: flex-start;
  padding: 10px 1px 1px 10px;

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SharedIconSC = styled(SharedIcon)`
  width: 20px;
  height: 20px;

  margin-left: 8px;
`;

const TooltipSC = styled("div")`
  width: 308px;
  padding: 16px 20px;
  border-radius: 20px;

  position: absolute;
  right: 0;
  top: -70px;

  background-color: ${ColorScheme.WHITE};
`;
const TooltipTextSC = styled("p")`
  color: ${ColorScheme.PRIMARY};

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const styles = {
  ContainerSC,
  CopyButtonSC,
  SharedIconSC,
  TooltipSC,
  TooltipTextSC,
};

import { Button, styled } from "@mui/material";
import SharedIcon from "@/assets/icons/SharedIcon.svg";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("div")`
  position: relative;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    position: static;
  }
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

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 18px;
    padding: 0;
  }
`;

const SharedIconSC = styled(SharedIcon)`
  width: 20px;
  height: 20px;

  margin-left: 8px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 16px;
    height: 16px;
  }
`;

const TooltipSC = styled("div")`
  width: 308px;

  position: absolute;
  right: 0;
  top: -70px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 100%;

    position: fixed;
    right: 0;
    top: auto;
    bottom: 16px;
  }
`;

const TooltipWrapperSC = styled("div")`
  width: 100%;
  padding: 16px 20px;
  border-radius: 20px;
  background-color: ${ColorScheme.WHITE};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: calc(100% - 32px);
    margin: 0 auto;

    padding: 16px 40px;
    border-radius: 16px;
    text-align: center;
  }
`;

const TooltipTextSC = styled("p")`
  color: ${ColorScheme.PRIMARY};

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

export const styles = {
  ContainerSC,
  CopyButtonSC,
  SharedIconSC,
  TooltipSC,
  TooltipWrapperSC,
  TooltipTextSC,
};

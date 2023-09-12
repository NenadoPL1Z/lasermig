import { styled } from "@mui/material";
import { ZIndex } from "@/styles/theme/ZIndex";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("div")`
  overflow: hidden;
  width: 100%;
  height: 1016px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;
  top: 23px;
  z-index: ${ZIndex.HIDDEN};

  @media (max-width: ${Breakpoints.MOBILE}px) {
    height: 313px;
    top: 46px;
  }
`;

const WrapperSC = styled("div")`
  position: relative;

  width: 100%;
  height: 100%;
  max-width: 1920px;
`;

const BgSC = styled("div")`
  width: 1276px;
  height: 1106px;

  position: absolute;
  right: -250px;
  top: 0;
  z-index: ${ZIndex.HIDDEN};

  background-image: url("/assets/images/HomeDescBg.png");
  background-repeat: no-repeat;
  background-position: right top;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    background-size: 50% 50%;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    height: 313px;
    right: 0px;
    background-size: auto;
    background-image: url("/assets/images/HomeMobileBg.png");
  }
`;

export const styles = {
  ContainerSC,
  WrapperSC,
  BgSC,
};

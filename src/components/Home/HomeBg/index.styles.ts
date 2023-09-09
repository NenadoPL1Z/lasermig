import { styled } from "@mui/material";
import { ZIndex } from "@/styles/theme/ZIndex";

const ContainerSC = styled("div")`
  width: 100%;
  height: 1016px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;
  top: 23px;
  z-index: ${ZIndex.HIDDEN};
`;

const WrapperSC = styled("div")`
  position: relative;
  max-width: 1920px;

  width: 100%;
  height: 100%;
`;

const BgSC = styled("div")`
  width: 1276px;
  height: 1106px;

  position: absolute;
  right: 0;
  top: 0;
  z-index: ${ZIndex.HIDDEN};

  background-image: url("/assets/images/HomeBg.png");
  background-repeat: no-repeat;
  background-position: right top;
`;

export const styles = {
  ContainerSC,
  WrapperSC,
  BgSC,
};

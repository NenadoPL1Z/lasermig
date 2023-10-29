import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { ZIndex } from "@/styles/theme/ZIndex";
import ColorScheme from "@/styles/theme/ColorScheme";

const ContainerSC = styled("section")`
  margin-bottom: 100px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
  }
`;

const LastSC = styled("section")``;

const BottomSC = styled("div")`
  display: none;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: block;
    width: 100%;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: ${ZIndex.HEADER};

    background-color: ${ColorScheme.WHITE};
    box-shadow: 0px -9px 34px 0px rgba(223, 223, 223, 0.42);
    border-radius: 24px 24px 0 0;
  }
`;

const BottomWrapperSC = styled("div")`
  display: flex;
  padding: 16px 0;
`;

export const styles = {
  ContainerSC,
  LastSC,
  BottomSC,
  BottomWrapperSC,
};

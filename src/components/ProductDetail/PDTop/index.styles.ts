import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("div")`
  position: relative;

  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;

  background-color: ${ColorScheme.WHITE};

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    flex-direction: column-reverse;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const DescSC = styled("div")`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

const MobileSC = styled("div")`
  display: none;
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: block;
  }
`;

const LeftSC = styled("div")`
  width: 100%;
  max-width: 538px;
  margin-right: 10px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    max-width: none;
    margin-right: 0;
  }
`;

const RightSC = styled("div")`
  flex-shrink: 0.4;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-shrink: 1;
  }
`;

export const styles = {
  ContainerSC,
  DescSC,
  MobileSC,
  LeftSC,
  RightSC,
};

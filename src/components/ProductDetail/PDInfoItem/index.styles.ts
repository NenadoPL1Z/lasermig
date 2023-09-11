import { Collapse, styled } from "@mui/material";
import { H2SC } from "@/UI/H2SC";
import ArrowUP from "assets/icons/ArrowUp.svg";
import ArrowDown from "assets/icons/ArrowDown.svg";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ColorScheme from "@/styles/theme/ColorScheme";

const ContainerSC = styled("div")`
  padding-bottom: 36px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${ColorScheme.TERTIARY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-bottom: 24px;
  }
`;

const HeaderSC = styled("div")`
  padding-top: 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  user-select: none;

  &:hover {
    & > h2 {
      color: ${ColorScheme.ACCENT_2};
    }
    & > svg > path {
      fill: ${ColorScheme.ACCENT_2};
    }
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-top: 24px;
  }
`;

const TitleSC = styled(H2SC)`
  font-size: 32px;
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
  }
`;

const ArrowUPSC = styled(ArrowUP)`
  width: 24px;
  height: 24px;
  margin-left: 8px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 16px;
    height: 16px;
  }
`;

const ArrowDownSC = styled(ArrowDown)`
  width: 24px;
  height: 24px;
  margin-left: 8px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 16px;
    height: 16px;
  }
`;

const CollapseSC = styled(Collapse)``;

export const styles = {
  ContainerSC,
  HeaderSC,
  TitleSC,
  ArrowUPSC,
  ArrowDownSC,
  CollapseSC,
};

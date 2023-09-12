import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { ZIndex } from "@/styles/theme/ZIndex";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import NewsBackIcon from "@/assets/icons/NewsBack.svg";
import Link from "next/link";

const ContainerSC = styled("section")``;

const WrapperSC = styled("div")`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const LeftSC = styled("div")`
  height: 100%;

  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  z-index: ${ZIndex.OVER};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 32px;
  }
`;

const LeftTopSC = styled("div")`
  margin-bottom: 20px;
`;

const BackSC = styled(Link)`
  display: flex;

  color: ${ColorScheme.WHITE};
  font-family: ${FontNamespace.BN};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 18px;
  }
`;

const NewsBackIconSC = styled(NewsBackIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 16px;
    height: 16px;
  }
`;

const LeftBottomSC = styled("div")``;

const TagsSC = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  list-style: none;
`;

const TagSC = styled("li")``;

const TagLinkSC = styled(Link)`
  display: block;

  margin-right: 20px;
  margin-bottom: 6px;

  color: ${ColorScheme.TERTIARY};
  font-family: ${FontNamespace.BN};
  font-size: 20px;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 18px;
  }
`;

const TitleSC = styled("h1")`
  color: ${ColorScheme.WHITE};
  font-family: ${FontNamespace.BN};

  max-width: 601px;

  font-size: 82px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 10px 0 16px;
  z-index: ${ZIndex.OVER};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
    max-width: none;
  }
`;

const DateSC = styled("time")`
  color: ${ColorScheme.TERTIARY};
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
  }
`;

const RightSC = styled("div")`
  z-index: ${ZIndex.OVER};
`;

export const styles = {
  ContainerSC,
  WrapperSC,
  LeftSC,
  LeftTopSC,
  NewsBackIconSC,
  LeftBottomSC,
  BackSC,
  TagsSC,
  TagSC,
  TagLinkSC,
  TitleSC,
  DateSC,
  RightSC,
};

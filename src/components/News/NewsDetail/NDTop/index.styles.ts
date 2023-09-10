import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { ZIndex } from "@/styles/theme/ZIndex";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import NewsBackIcon from "@/assets/icons/NewsBack.svg";
import Link from "next/link";

const ContainerSC = styled("section")`
  display: flex;
  justify-content: space-between;
`;

const LeftSC = styled("div")`
  height: 100%;

  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  z-index: ${ZIndex.OVER};
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
`;

const NewsBackIconSC = styled(NewsBackIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const LeftBottomSC = styled("div")``;

const TagsSC = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 20px;

  list-style: none;
`;

const TagSC = styled("li")`
  color: ${ColorScheme.TERTIARY};
  font-family: ${FontNamespace.BN};
  font-size: 20px;
  font-weight: 400;
`;

const TitleSC = styled("h1")`
  color: ${ColorScheme.WHITE};
  font-family: ${FontNamespace.BN};

  max-width: 601px;

  font-size: 82px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 16px 0;
  z-index: ${ZIndex.OVER};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
  }
`;

const DateSC = styled("time")`
  color: ${ColorScheme.TERTIARY};
  font-size: 16px;
  font-weight: 400;
`;

const RightSC = styled("div")`
  z-index: ${ZIndex.OVER};
`;

export const styles = {
  ContainerSC,
  LeftSC,
  LeftTopSC,
  NewsBackIconSC,
  LeftBottomSC,
  BackSC,
  TagsSC,
  TagSC,
  TitleSC,
  DateSC,
  RightSC,
};

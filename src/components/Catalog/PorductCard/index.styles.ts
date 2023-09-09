import { styled } from "@mui/material";
import Link from "next/link";
import ColorScheme from "@/styles/theme/ColorScheme";
import { H3SC } from "@/UI/H3SC";
import { H2SC } from "@/UI/H2SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("li")`
  height: 318px;
  background-color: ${ColorScheme.WHITE};
`;

const LinkSC = styled(Link)`
  height: 100%;
  padding-right: 0 !important;

  display: flex;
  justify-content: space-between;
`;

const LeftSC = styled("div")`
  height: 100%;
  max-width: 285px;
  margin-right: 24px;

  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LeftTopSC = styled("div")`
  flex-grow: 1;
`;

const CategorySC = styled(H3SC)`
  color: ${ColorScheme.SECONDARY};

  font-size: 20px;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const TitleSC = styled(H2SC)`
  font-size: 28px;
  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const DescSC = styled("p")`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

const RightSC = styled("div")`
  display: block;
`;

const ImageSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const styles = {
  ContainerSC,
  LinkSC,
  LeftSC,
  LeftTopSC,
  CategorySC,
  TitleSC,
  DescSC,
  RightSC,
  ImageSC,
};

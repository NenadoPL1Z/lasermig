import { styled } from "@mui/material";
import Link from "next/link";
import ColorScheme from "@/styles/theme/ColorScheme";
import { H3SC } from "@/UI/H3SC";
import { H2SC } from "@/UI/H2SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { FontNamespace } from "@/styles/theme/FontNamespace";

const ContainerSC = styled("li")`
  background-color: ${ColorScheme.WHITE};
`;

const LinkSC = styled(Link)`
  height: 100%;

  display: flex;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.TABLET}px) {
    flex-direction: column;
  }
`;

const LeftSC = styled("div")`
  height: 100%;
  max-width: 285px;
  margin-right: 24px;

  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${Breakpoints.TABLET}px) {
    height: auto;
    max-width: none;
    margin-right: 0;

    order: 2;
  }
`;

const LeftTopSC = styled("div")`
  flex-grow: 1;

  @media (max-width: ${Breakpoints.TABLET}px) {
    flex-grow: 0;
  }
`;

const LeftBottomSC = styled("div")`
  display: flex;
  align-items: center;
`;

const PriceSC = styled("div")`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const PriceLabelSC = styled("p")`
  margin-bottom: 10px;

  color: ${ColorScheme.SECONDARY};

  font-family: ${FontNamespace.SF};
  font-size: 18px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 4px;
    font-size: 12px;
  }
`;

const PriceSumSC = styled("div")`
  color: ${ColorScheme.PRIMARY};

  font-family: ${FontNamespace.BN};
  font-size: 24px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 18px;
  }
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
  margin-bottom: 40px;

  font-size: 18px;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

const RightSC = styled("div")`
  display: block;

  @media (max-width: ${Breakpoints.TABLET}px) {
    flex: 1;
    order: 1;
    margin-bottom: 8px;
  }
`;

const ImgSC = styled("img")`
  width: 100%;
  height: 100%;
  max-height: 258px;

  object-fit: contain;

  @media (max-width: ${Breakpoints.TABLET}px) {
    max-height: 172px;
  }
`;

export const styles = {
  ContainerSC,
  LinkSC,
  LeftSC,
  LeftTopSC,
  LeftBottomSC,
  PriceSC,
  PriceLabelSC,
  PriceSumSC,
  CategorySC,
  TitleSC,
  DescSC,
  RightSC,
  ImgSC,
};

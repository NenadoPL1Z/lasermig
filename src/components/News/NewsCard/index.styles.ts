import { styled } from "@mui/material";
import { H1SC } from "@/UI/H1SC";
import Link from "next/link";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("li")`
  background-color: ${ColorScheme.WHITE};
  overflow: hidden;
`;

const LinkSC = styled(Link)`
  display: block;
`;

const ImgSC = styled("img")`
  width: 100%;
  display: block;

  min-height: 254px;
  max-height: 440px;

  object-fit: cover;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    min-height: auto;
    max-height: 250px;
  }
`;

const TextContainerSC = styled("div")``;

const TagsSC = styled("div")`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 4px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 2px;
  }
`;

const TagSC = styled("p")`
  font-size: 16px;
  font-weight: 400;

  margin-right: 10px;
  margin-bottom: 4px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
    margin-bottom: 2px;
  }
`;

const TitleSC = styled(H1SC)`
  font-size: 32px;
  margin-bottom: 16px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

const DescSC = styled("p")`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

export const styles = {
  ContainerSC,
  LinkSC,
  ImgSC,
  TextContainerSC,
  TagsSC,
  TagSC,
  TitleSC,
  DescSC,
};

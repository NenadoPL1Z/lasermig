import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { H2SC } from "@/UI/H2SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import Link from "next/link";

const ContainerSC = styled("li")`
  list-style-type: none;
  background-color: ${ColorScheme.WHITE};
`;

const LinkSC = styled(Link)`
  display: flex;
  flex-direction: column;
`;

const ImgContainerSC = styled("div")`
  flex-grow: 1;

  max-width: 480px;
  max-height: 323px;

  margin-bottom: 51px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 20px;
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    height: 172px;
  }
`;

const ImgSC = styled("img")`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextContainerSC = styled("div")``;
const TitleSC = styled(H2SC)`
  font-size: 36px;
  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

export const styles = {
  ContainerSC,
  LinkSC,
  ImgContainerSC,
  ImgSC,
  TextContainerSC,
  TitleSC,
};

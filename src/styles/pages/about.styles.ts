import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { ZIndex } from "@/styles/theme/ZIndex";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerImageSC = styled("section")`
  margin-bottom: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 32px;
  }
`;

const TitleSC = styled("h1")`
  color: ${ColorScheme.WHITE};
  font-family: ${FontNamespace.BN};

  font-size: 82px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 0;
  z-index: ${ZIndex.OVER};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 36px;
  }
`;

const ContainerInfoSC = styled("section")``;

const BottomImageSC = styled("img")`
  width: 100%;
  max-height: 596px;
  margin-bottom: 16px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 0;
  }
`;

const FigcaptionSC = styled("figcaption")`
  font-size: 16px;
`;

export const styles = {
  ContainerImageSC,
  TitleSC,
  ContainerInfoSC,
  BottomImageSC,
  FigcaptionSC,
};

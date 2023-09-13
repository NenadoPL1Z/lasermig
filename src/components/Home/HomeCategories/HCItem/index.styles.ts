import { css, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { H2SC } from "@/UI/H2SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { ZIndex } from "@/styles/theme/ZIndex";
import Link from "next/link";

type Alternative = { isAlternative: boolean };

const ContainerSC = styled(Link)<Alternative>`
  min-height: 285px;

  display: flex;

  flex-direction: ${({ isAlternative }) =>
    isAlternative ? "column-reverse" : "row"};

  position: relative;
  overflow: hidden;

  background-color: ${ColorScheme.WHITE};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    height: auto;
    flex-direction: column;
  }
`;

const LeftSC = styled("div")`
  max-width: 282px;
  margin-right: 24px;

  z-index: ${ZIndex.OVER};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
    margin-right: 0;
    order: 2;
  }
`;

const TitleSC = styled(H2SC)<Alternative>`
  margin-bottom: ${({ isAlternative }) => (isAlternative ? 24 : 0)}px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

const RightSC = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    order: 1;
    margin-bottom: 16px;
  }
`;

const ImgSC = styled("img")<Alternative>`
  ${({ isAlternative }) =>
    isAlternative
      ? css`
          width: 100%;
          max-height: 329px;

          position: absolute;
          right: 0;
          top: 40%;
          transform: translateY(-40%);
          z-index: ${ZIndex.DEFAULT};

          object-fit: contain;

          @media (max-width: ${Breakpoints.BIG_TABLET}px) {
            height: auto;

            position: static;
            top: 0%;
            transform: translateY(0%);
          }
        `
      : css`
          width: 100%;
          max-width: 574px;
          height: 386px;

          object-fit: contain;

          position: absolute;
          top: 0;
          z-index: ${ZIndex.DEFAULT};

          @media (max-width: ${Breakpoints.BIG_TABLET}px) {
            height: auto;
            position: static;
          }
        `};
`;

export const styles = {
  ContainerSC,
  LeftSC,
  TitleSC,
  RightSC,
  ImgSC,
};

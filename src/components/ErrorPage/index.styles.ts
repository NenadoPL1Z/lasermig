import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { ErrorPageProps } from "@/components/ErrorPage/types";

const ContainerSC = styled("section")<Pick<ErrorPageProps, "errorImage">>`
  background-color: ${ColorScheme.WHITE};

  flex-grow: 1;
  min-height: 802px;

  background-image: url(/assets/images/${({ errorImage }) =>
    errorImage + ".png"});
  background-repeat: no-repeat;
  background-position: right 65px bottom;
  background-size: 45%;

  @media (max-height: 1000px) {
    min-height: 602px;
  }

  @media (max-height: 700px) {
    min-height: 402px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    min-height: 402px;

    background-position: right 6px bottom;
    background-size: 276px 170px;
  }
`;

const TextContentSC = styled("div")`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
  }
`;

const TitlesSC = styled(Typography)`
  max-width: 427px;
  margin-bottom: 16px;
`;

export const styles = { ContainerSC, TextContentSC, TitlesSC };

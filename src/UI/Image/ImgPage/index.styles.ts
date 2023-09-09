import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { ImgPageProps } from "@/UI/Image/ImgPage/types";

const ContainerSC = styled("div")<Pick<ImgPageProps, "url">>`
  position: relative;

  width: 100%;
  height: 670px;

  display: flex;
  align-items: flex-end;

  overflow: hidden;

  background-color: ${ColorScheme.PRIMARY};
  background-repeat: no-repeat;
  background-image: url(${({ url }) => url});

  background-size: cover;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    height: 409px;

    background-size: auto 409px;
    background-position: 63%;
  }
`;

const ShadowBackgroundSC = styled("div")`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  bottom: 0;

  background-image: url("/assets/images/shadowBG.png");
  background-repeat: no-repeat;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    background-image: url("/assets/images/shadowBGMobile.png");
    background-size: 100%;
  }
`;

export const styles = {
  ContainerSC,
  ShadowBackgroundSC,
};

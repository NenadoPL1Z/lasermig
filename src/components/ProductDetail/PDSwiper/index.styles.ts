import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-bottom: 32px;
  }
`;

const NavContainerSC = styled("div")`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 8px;
  }
`;

const SwiperSC = styled(Swiper)`
  max-width: 907px;
`;

const SwiperSlideSC = styled(SwiperSlide)``;

const ImgSC = styled("img")`
  width: 100%;
  height: 100%;
  max-height: 583px;

  object-fit: contain;
`;

export const styles = {
  ContainerSC,
  NavContainerSC,
  SwiperSC,
  SwiperSlideSC,
  ImgSC,
};

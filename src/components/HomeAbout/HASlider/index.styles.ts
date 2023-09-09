import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const SwiperSC = styled(Swiper)`
  transform: translateX(-35px);

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    transform: translateX(-0px);
    margin-bottom: 16px;
  }
`;

const SwiperSlideSC = styled(SwiperSlide)``;

const ImgSC = styled("img")`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

export const styles = {
  SwiperSC,
  SwiperSlideSC,
  ImgSC,
};

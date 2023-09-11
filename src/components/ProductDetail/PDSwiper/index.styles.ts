import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const NavContainerSC = styled("div")``;

const SwiperSC = styled(Swiper)`
  max-width: 907px;
  transform: translateX(30px);
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

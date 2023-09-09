import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const SwiperSC = styled(Swiper)`
  .swiper-wrapper {
    & > *:last-child {
      margin-right: 0;
    }
  }
`;

const SwiperSlideSC = styled(SwiperSlide)`
  max-width: 520px !important;

  margin-right: 20px;

  user-select: none;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: 212px !important;
  }
`;

export const styles = {
  SwiperSC,
  SwiperSlideSC,
};

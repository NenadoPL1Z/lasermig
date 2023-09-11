import { useState } from "react";
import Swiper from "swiper";

export const usePDSwiper = () => {
  const [swiper, setSwiper] = useState<Swiper>();

  const onSwiper = (swiper: Swiper) => {
    setSwiper(swiper);
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return {
    onSwiper,
    handleNext,
    handlePrev,
  };
};

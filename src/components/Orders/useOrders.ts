import { useState } from "react";
import Swiper from "swiper";
import { Nullable } from "@/types/types";

export const useOrders = () => {
  const [swiper, setSwiper] = useState<Nullable<Swiper>>(null);

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
    handleNext,
    handlePrev,

    onSwiper,
  };
};

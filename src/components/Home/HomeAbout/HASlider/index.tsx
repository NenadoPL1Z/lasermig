import React from "react";
import { HASliderProps } from "@/components/Home/types";
import { styles } from "@/components/Home/HomeAbout/HASlider/index.styles";

const HASlider = ({ slider, onSwiper }: HASliderProps) => {
  return (
    <SwiperSC loop={true} onSwiper={onSwiper} slidesPerView="auto">
      {slider.map((item) => (
        <SwiperSlideSC key={item}>
          <ImgSC src="/assets/images/stanok.png" />
        </SwiperSlideSC>
      ))}
    </SwiperSC>
  );
};

const { SwiperSC, SwiperSlideSC, ImgSC } = styles;

export default React.memo(HASlider);

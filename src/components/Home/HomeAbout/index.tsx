import React from "react";
import { styles } from "@/components/Home/HomeAbout/index.styles";
import { useHomeAbout } from "@/components/Home/HomeAbout/useHomeAbout";
import { HomeSliderProps } from "@/components/Home/types";
import HASlider from "@/components/Home/HomeAbout/HASlider";

const HomeSlider = ({ slider }: HomeSliderProps) => {
  const { onSwiper, handlePrev, handleNext } = useHomeAbout();

  return (
    <SwiperSC onSwiper={onSwiper} loop={true} autoHeight slidesPerView="auto">
      {slider.map((sliderItem) => (
        <SwiperSlideSC key={sliderItem.title}>
          <HASlider
            {...sliderItem}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </SwiperSlideSC>
      ))}
    </SwiperSC>
  );
};

const { SwiperSC, SwiperSlideSC } = styles;

export default React.memo(HomeSlider);

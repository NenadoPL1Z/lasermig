import Swiper from "swiper";

export interface HomeSliderProps {
  slider: string[];
}

export interface HASliderProps extends HomeSliderProps {
  onSwiper: (swiper: Swiper) => void;
}

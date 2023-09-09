import Swiper from "swiper";
import { CategoriesArr } from "@/lib/models/CategoryModel";

export interface HomeSliderProps {
  slider: string[];
}

export interface HomeCategoriesProps {
  categories: CategoriesArr;
}

export interface HASliderProps extends HomeSliderProps {
  onSwiper: (swiper: Swiper) => void;
}

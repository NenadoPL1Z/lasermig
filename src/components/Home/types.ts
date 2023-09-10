import { CategoriesArr } from "@/lib/models/CategoryModel";
import { SliderArr, SliderModel } from "@/lib/models/SliderModel";

export interface HomeSliderProps {
  slider: SliderArr;
}

export interface HomeCategoriesProps {
  categories: CategoriesArr;
}

export interface HASliderProps extends SliderModel {
  handlePrev: () => void;
  handleNext: () => void;
}

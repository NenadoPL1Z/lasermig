import React from "react";
import { OutlinedButtonRounded } from "@/UI/Buttons/OutlinedButton";
import { styles } from "@/UI/SwiperArrows/index.styles";

interface SwiperArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

const SwiperArrows = ({ onPrev, onNext }: SwiperArrowsProps) => {
  return (
    <ContainerSC>
      <OutlinedButtonRounded onClick={onPrev}>
        <LeftIconSC />
      </OutlinedButtonRounded>
      <OutlinedButtonRounded onClick={onNext}>
        <RightIconSC />
      </OutlinedButtonRounded>
    </ContainerSC>
  );
};

const { ContainerSC, LeftIconSC, RightIconSC } = styles;

export default React.memo(SwiperArrows);

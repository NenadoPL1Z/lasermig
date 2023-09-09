import React from "react";
import { OutlinedButtonRounded } from "@/UI/Buttons/OutlinedButton";
import { styles } from "@/UI/SwiperArrows/index.styles";
import LeftIcon from "@/assets/icons/LeftIcon.svg";
import RightIcon from "@/assets/icons/RightIcon.svg";

interface SwiperArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

const SwiperArrows = ({ onPrev, onNext }: SwiperArrowsProps) => {
  return (
    <ContainerSC>
      <OutlinedButtonRounded onClick={onPrev}>
        <LeftIcon />
      </OutlinedButtonRounded>
      <OutlinedButtonRounded onClick={onNext}>
        <RightIcon />
      </OutlinedButtonRounded>
    </ContainerSC>
  );
};

const { ContainerSC } = styles;

export default React.memo(SwiperArrows);

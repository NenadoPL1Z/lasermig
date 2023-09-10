import React from "react";
import { HASliderProps } from "@/components/Home/types";
import { styles } from "@/components/Home/HomeAbout/HASlider/index.styles";
import Link from "next/link";
import SwiperArrows from "@/UI/SwiperArrows";

const HASlider = ({
  title,
  description,
  image,
  link,
  handlePrev,
  handleNext,
}: HASliderProps) => {
  return (
    <ContainerSC>
      <LeftSC className="content content-br">
        <TitleSC>{title}</TitleSC>
        <DescSC>{description}</DescSC>
        <BottomSC>
          <ButtonSC>
            <Link href={link}>Подробнее</Link>
          </ButtonSC>
          <SwiperArrows onPrev={handlePrev} onNext={handleNext} />
        </BottomSC>
      </LeftSC>
      <ImgSC src={image} alt={title} />
    </ContainerSC>
  );
};

const { ContainerSC, LeftSC, TitleSC, DescSC, BottomSC, ButtonSC, ImgSC } =
  styles;

export default React.memo(HASlider);

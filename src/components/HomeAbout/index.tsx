import React from "react";
import SwiperArrows from "@/UI/SwiperArrows";
import { styles } from "@/components/HomeAbout/index.styles";
import { useHomeAbout } from "@/components/HomeAbout/useHomeAbout";
import HASlider from "@/components/HomeAbout/HASlider";
import Link from "next/link";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { HomeSliderProps } from "@/components/HomeAbout/types";

const HomeSlider = ({ slider }: HomeSliderProps) => {
  const { onSwiper, handlePrev, handleNext } = useHomeAbout();

  return (
    <ContainerSC>
      <LeftSC className="content content-br">
        <TitleSC>Станки лазерной резки по металлу из Китая</TitleSC>
        <DescSC>
          Один из крупнейших производителей высокотехнологичных комплексов
          лазерной резки, аппаратов лазерной сварки, чистки, гибочных
          гидравлических прессов
        </DescSC>
        <BottomSC>
          <ButtonSC>
            <Link href={RoutesNamespace.CATALOG}>Подробнее</Link>
          </ButtonSC>
          <SwiperArrows onPrev={handlePrev} onNext={handleNext} />
        </BottomSC>
      </LeftSC>
      <HASlider slider={slider} onSwiper={onSwiper} />
    </ContainerSC>
  );
};

const { ContainerSC, LeftSC, TitleSC, DescSC, BottomSC, ButtonSC } = styles;

export default React.memo(HomeSlider);

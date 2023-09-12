import React from "react";
import { styles } from "@/components/ProductDetail/PDSwiper/index.styles";
import SwiperArrows from "@/UI/SwiperArrows";
import { usePDSwiper } from "@/components/ProductDetail/PDSwiper/usePDSwiper";
import { PDSwiperProps } from "@/components/ProductDetail/types";

const PDSwiper = ({ product_images }: PDSwiperProps) => {
  const { onSwiper, handlePrev, handleNext } = usePDSwiper();

  return (
    <ContainerSC>
      <NavContainerSC>
        <SwiperArrows onNext={handleNext} onPrev={handlePrev} />
      </NavContainerSC>
      <SwiperSC onSwiper={onSwiper} slidesPerView="auto" loop autoHeight>
        {product_images
          .sort((a, b) => a.position - b.position)
          .map((img, index) => (
            <SwiperSlideSC key={img.image}>
              <ImgSC src={img.image} alt={`Фото ${index + 1}`} />
            </SwiperSlideSC>
          ))}
      </SwiperSC>
    </ContainerSC>
  );
};

const { ContainerSC, NavContainerSC, SwiperSC, SwiperSlideSC, ImgSC } = styles;

export default React.memo(PDSwiper);

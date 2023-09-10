import React from "react";
import { styles } from "@/components/Orders/index.styles";
import OrdersList from "@/components/Orders/OrdersList";
import SwiperArrows from "@/UI/SwiperArrows";
import { useOrders } from "@/components/Orders/useOrders";

const Orders = () => {
  const { handlePrev, handleNext, onSwiper } = useOrders();

  return (
    <>
      <TopSC className="padding">
        <TitleSC>Процесс заказа оборудования</TitleSC>
        <SwiperArrows onPrev={handlePrev} onNext={handleNext} />
      </TopSC>
      <OrdersList onSwiper={onSwiper} />
    </>
  );
};

const { TopSC, TitleSC } = styles;

export default React.memo(Orders);

import React from "react";
import { orderData } from "@/lib/mock/orderData";

import OrderItem from "@/components/Orders/OrderItem";
import { styles } from "@/components/Orders/OrdersList/index.styles";
import "swiper/css";
import Swiper from "swiper";

interface OrdersListProps {
  onSwiper: (swiper: Swiper) => void;
}

const OrdersList = ({ onSwiper }: OrdersListProps) => {
  return (
    <SwiperSC className="padding" onSwiper={onSwiper} slidesPerView="auto">
      {orderData.map((orderItem) => (
        <SwiperSlideSC key={orderItem.title}>
          <OrderItem {...orderItem} />
        </SwiperSlideSC>
      ))}
    </SwiperSC>
  );
};

const { SwiperSC, SwiperSlideSC } = styles;

export default React.memo(OrdersList);

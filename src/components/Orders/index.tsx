import React from "react";
import { styles } from "@/components/Orders/index.styles";
import OrdersList from "@/components/Orders/OrdersList";

const Orders = () => {
  return (
    <>
      <TitleSC>Процесс заказа оборудования</TitleSC>
      <OrdersList />
    </>
  );
};

const { TitleSC } = styles;

export default React.memo(Orders);

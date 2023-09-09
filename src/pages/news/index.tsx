import React from "react";
import { H1SC } from "@/UI/H1SC";
import TitleLayout from "@/layout/TitleLayout";

const News = () => {
  return (
    <TitleLayout title="Новости">
      <H1SC>Новости</H1SC>
    </TitleLayout>
  );
};

export default React.memo(News);

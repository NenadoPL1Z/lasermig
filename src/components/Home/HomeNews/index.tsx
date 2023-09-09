import React from "react";
import { styles } from "@/components/Home/HomeNews/index.styles";

const HomeNews = () => {
  return (
    <>
      <TopSC>
        <TitleSC>Новости</TitleSC>
        <DescButtonSC>
          ВСЕ НОВОСТИ <OpenSC />
        </DescButtonSC>
      </TopSC>
    </>
  );
};

const { TopSC, TitleSC, DescButtonSC, OpenSC } = styles;

export default React.memo(HomeNews);

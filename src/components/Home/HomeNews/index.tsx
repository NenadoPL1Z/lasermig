import React from "react";
import { styles } from "@/components/Home/HomeNews/index.styles";
import { HomeNewsProps } from "@/components/Home/types";
import NewsCard from "@/components/News/NewsCard";

const HomeNews = ({ news }: HomeNewsProps) => {
  const isFirst = news[0];
  const isSecond = news[1];
  const isThird = news[2];

  return (
    <>
      <TopSC>
        <TitleSC>Новости</TitleSC>
        <DescButtonSC>
          ВСЕ НОВОСТИ <OpenSC />
        </DescButtonSC>
      </TopSC>
      <ListSC>
        {isFirst && (
          <div className="first">
            <NewsCard {...news[0]} />
          </div>
        )}
        {isSecond && (
          <div className="second">
            <NewsCard {...news[1]} />
          </div>
        )}
        {isThird && (
          <div className="third">
            <NewsCard {...news[2]} />
          </div>
        )}
      </ListSC>
    </>
  );
};

const { TopSC, TitleSC, DescButtonSC, OpenSC, ListSC } = styles;

export default React.memo(HomeNews);

import React from "react";
import { styles } from "@/components/Home/HomeNews/index.styles";
import { HomeNewsProps } from "@/components/Home/types";
import NewsCard from "@/components/News/NewsCard";
import Link from "next/link";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";

const HomeNews = ({ news }: HomeNewsProps) => {
  const isFirst = news[0];
  const isSecond = news[1];
  const isThird = news[2];

  return (
    <>
      <TopSC>
        <TitleSC>Новости</TitleSC>
        <Link href={RoutesNamespace.NEWS}>
          <DescButtonSC>
            ВСЕ НОВОСТИ <OpenSC />
          </DescButtonSC>
        </Link>
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
      <MobileButtonSC>
        Все НОВОСТИ <OpenSC />
      </MobileButtonSC>
    </>
  );
};

const { TopSC, TitleSC, DescButtonSC, MobileButtonSC, OpenSC, ListSC } = styles;

export default React.memo(HomeNews);

import React from "react";
import { styles } from "@/components/Home/HomeNews/index.styles";
import { HomeNewsProps } from "@/components/Home/types";
import NewsCard from "@/components/News/NewsCard";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { useNotebook } from "@/hooks/useMedia";

const NDRelated = ({ news }: HomeNewsProps) => {
  const isFirst = news[0];
  const isSecond = news[1];
  const isThird = news[2];
  const isNotebook = useNotebook();

  return (
    <>
      <TopSC>
        <TitleSC>Читайте также</TitleSC>
        <DescButtonSC>
          <LinkSC href={RoutesNamespace.NEWS}>
            ВСЕ НОВОСТИ <OpenSC />
          </LinkSC>
        </DescButtonSC>
      </TopSC>
      <ListSC>
        {isFirst && (
          <div className="first">
            <NewsCard isBig={!isNotebook} {...news[0]} />
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
      <MobileButtonSC fullWidth>
        <LinkSC href={RoutesNamespace.NEWS}>
          ВСЕ НОВОСТИ <OpenSC />
        </LinkSC>
      </MobileButtonSC>
    </>
  );
};

const { TopSC, TitleSC, LinkSC, DescButtonSC, MobileButtonSC, OpenSC, ListSC } =
  styles;

export default React.memo(NDRelated);

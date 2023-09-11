import React from "react";
import { styles } from "@/components/Home/HomeNews/index.styles";
import NewsCard from "@/components/News/NewsCard";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { useNotebook } from "@/hooks/useMedia";
import { NDRelatedProps } from "@/components/News/NewsDetail/types";

const NDRelated = ({ news }: NDRelatedProps) => {
  const isFirst = news[0];
  const isSecond = news[1];
  const isThird = news[2];
  const isNotebook = useNotebook();

  return (
    <>
      <TopSC>
        <TitleSC>Читайте также</TitleSC>
        <LinkSC href={RoutesNamespace.NEWS}>
          <DescButtonSC>
            ВСЕ НОВОСТИ <OpenSC />
          </DescButtonSC>
        </LinkSC>
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
      <LinkSC href={RoutesNamespace.NEWS}>
        <MobileButtonSC fullWidth>
          ВСЕ НОВОСТИ <OpenSC />
        </MobileButtonSC>
      </LinkSC>
    </>
  );
};

const { TopSC, TitleSC, LinkSC, DescButtonSC, MobileButtonSC, OpenSC, ListSC } =
  styles;

export default React.memo(NDRelated);

import React from "react";
import { NewsListProps } from "@/components/News/types";
import NewsCard from "@/components/News/NewsCard";
import { styles } from "@/components/News/NewsList/index.styles";

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ContainerSC>
      {news.map((item) => (
        <NewsCard key={item.slug} {...item} />
      ))}
    </ContainerSC>
  );
};

const { ContainerSC } = styles;

export default React.memo(NewsList);

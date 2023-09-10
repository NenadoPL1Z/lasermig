import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import { GetServerSideProps } from "next";
import {
  fetchGetNews,
  FetchGetNewsResponse,
} from "@/lib/api/news/fetchGetNews";
import { styles } from "@/styles/pages/news.styles";
import TagsList from "@/components/Tags/TagsList";
import NewsList from "@/components/News/NewsList";

interface NewsProps extends FetchGetNewsResponse {}

const News = ({ news_tags, news }: NewsProps) => {
  return (
    <TitleLayout title="Новости">
      <TitleSC className="padding">Новости</TitleSC>
      <TagsList tags={news_tags} />
      <NewsList tags={news_tags} {...news} />
    </TitleLayout>
  );
};

const { TitleSC } = styles;

export const getServerSideProps: GetServerSideProps<NewsProps> = async () => {
  const news = await fetchGetNews({ page: 1 });
  return { props: { ...news } };
};

export default React.memo(News);

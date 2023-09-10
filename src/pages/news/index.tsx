import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import { GetServerSideProps } from "next";
import {
  fetchGetNews,
  FetchGetNewsResponse,
} from "@/lib/api/news/fetchGetNews";
import { styles } from "@/styles/pages/news.styles";
import TagsList from "@/components/Tags/TagsList";

interface NewsProps extends FetchGetNewsResponse {}

const News = ({ news_tags }: NewsProps) => {
  return (
    <TitleLayout title="Новости">
      <TitleSC>Новости</TitleSC>
      <TagsList tags={news_tags} />
    </TitleLayout>
  );
};

const { TitleSC } = styles;

export const getServerSideProps: GetServerSideProps<NewsProps> = async () => {
  const news = await fetchGetNews({ page: 1 });
  return { props: { ...news } };
};

export default React.memo(News);

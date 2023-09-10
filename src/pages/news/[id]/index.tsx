import React from "react";
import { GetServerSideProps } from "next";
import { fetchGetNewBySlug } from "@/lib/api/news/fetchGetNewBySlug";
import NDTop from "@/components/News/NewsDetail/NDTop";
import { NewsDetailModel } from "@/lib/models/NewsDetailModel";
import TitleLayout from "@/layout/TitleLayout";

interface NewsId extends NewsDetailModel {}

const NewsId = ({ slug, title, image, tags, date }: NewsId) => {
  return (
    <TitleLayout title={title}>
      <NDTop slug={slug} title={title} image={image} tags={tags} date={date} />
    </TitleLayout>
  );
};

export const getServerSideProps: GetServerSideProps<NewsId> = async (
  context,
) => {
  const slug = (context.query?.id as string) || "";
  const news = await fetchGetNewBySlug(slug);
  return { props: { ...news } };
};

export default React.memo(NewsId);

import React from "react";
import { GetServerSideProps } from "next";
import { fetchGetNewBySlug } from "@/lib/api/news/fetchGetNewBySlug";
import NDTop from "@/components/News/NewsDetail/NDTop";
import { NewsDetailModel } from "@/lib/models/NewsDetailModel";
import TitleLayout from "@/layout/TitleLayout";
import NDRelated from "@/components/News/NewsDetail/NDRelated";
import { styles } from "@/styles/pages/newsID.styles";
import Questions from "@/components/Questions";
import NDContent from "@/components/News/NewsDetail/NDContent";

interface NewsIdProps extends NewsDetailModel {}

const NewsId = ({
  slug,
  title,
  image,
  tags,
  date,
  description,
  related_news,
}: NewsIdProps) => {
  return (
    <TitleLayout title={title}>
      <NDTop slug={slug} title={title} image={image} tags={tags} date={date} />
      {!!description && (
        <ContentSC className="padding">
          <NDContent description={description} />
        </ContentSC>
      )}
      {!!related_news.length && (
        <ContainerSC className="padding">
          <NDRelated news={related_news} />
        </ContainerSC>
      )}
      <div className="padding">
        <Questions />
      </div>
    </TitleLayout>
  );
};

const { ContainerSC, ContentSC } = styles;

export const getServerSideProps: GetServerSideProps<NewsIdProps> = async (
  context,
) => {
  const slug = (context.query?.id as string) || "";
  const news = await fetchGetNewBySlug(slug);
  return { props: news };
};

export default React.memo(NewsId);

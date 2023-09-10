import React from "react";
import { styles } from "@/components/News/NewsCard/index.styles";
import { NewsModel } from "@/lib/models/NewsModel";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { getImageUrl } from "@/lib/services";

export interface NewsCardProps extends NewsModel {
  isBig?: boolean;
}

const NewsCard = ({
  title,
  tags,
  slug,
  image,
  isBig,
  short_description,
}: NewsCardProps) => {
  return (
    <ContainerSC className="content-br">
      <LinkSC href={`${RoutesNamespace.NEWS}/${slug}`}>
        <ImgSC isBig={isBig} src={getImageUrl(image)} alt={title} />
        <TextContainerSC className="content">
          <TagsSC>
            {tags.map((tag) => (
              <TagSC key={tag}>#{tag}</TagSC>
            ))}
          </TagsSC>
          <TitleSC>{title}</TitleSC>
          <DescSC>{short_description}</DescSC>
        </TextContainerSC>
      </LinkSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  LinkSC,
  ImgSC,
  TextContainerSC,
  TagsSC,
  TagSC,
  TitleSC,
  DescSC,
} = styles;

export default React.memo(NewsCard);

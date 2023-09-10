import React from "react";
import { styles } from "@/components/News/NewsCard/index.styles";
import { NewsModel } from "@/lib/models/NewsModel";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { getImageUrl } from "@/lib/services";

const NewsCard = ({
  title,
  tags,
  slug,
  image,
  short_description,
}: NewsModel) => {
  return (
    <ContainerSC className="content-br">
      <LinkSC href={`${RoutesNamespace.NEWS}/${slug}`}>
        <ImgSC src={getImageUrl(image)} alt={title} />
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

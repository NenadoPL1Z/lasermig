import React from "react";
import { CategoryModel } from "@/lib/models/CategoryModel";
import { styles } from "@/components/Catalog/CategoryCard/index.styles";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";

const CategoryCard = ({ name, image, slug }: CategoryModel) => {
  const href = `${RoutesNamespace.CATALOG}/${slug}`;

  return (
    <ContainerSC className="content-br">
      <LinkSC className="content" href={href}>
        <ImgContainerSC>
          <ImgSC src={image} alt={name} />
        </ImgContainerSC>
        <TextContainerSC>
          <TitleSC>{name}</TitleSC>
          <OutlinedButton>ПОДРОБНЕЕ</OutlinedButton>
        </TextContainerSC>
      </LinkSC>
    </ContainerSC>
  );
};

const { ContainerSC, LinkSC, ImgContainerSC, ImgSC, TextContainerSC, TitleSC } =
  styles;

export default React.memo(CategoryCard);

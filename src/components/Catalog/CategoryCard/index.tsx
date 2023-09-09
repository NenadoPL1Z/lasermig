import React from "react";
import { CategoryModel } from "@/lib/models/CategoryModel";
import { styles } from "@/components/Catalog/CategoryCard/index.styles";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import Link from "next/link";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";

const CategoryCard = ({ name, image, slug }: CategoryModel) => {
  const href = `${RoutesNamespace.CATALOG}/${slug}`;

  return (
    <ContainerSC className="content content-br">
      <ImgSC className="content-br" src={image} alt={name} />
      <TextContainerSC>
        <TitleSC>{name}</TitleSC>
        <OutlinedButton>
          <Link href={href}>ПОДРОБНЕЕ</Link>
        </OutlinedButton>
      </TextContainerSC>
    </ContainerSC>
  );
};

const { ContainerSC, ImgSC, TextContainerSC, TitleSC } = styles;

export default React.memo(CategoryCard);

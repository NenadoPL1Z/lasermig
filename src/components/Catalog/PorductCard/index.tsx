import React from "react";
import { ProductModel } from "@/lib/models/ProductModel";
import { styles } from "@/components/Catalog/PorductCard/index.styles";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";

const ProductCard = (props: ProductModel) => {
  const { name, short_description, slug, product_images } = props;

  // TODO:
  const href = `${RoutesNamespace.CATALOG}/1/${slug}`;
  const { image } = product_images.sort((a, b) => a.position - b.position)[0];

  return (
    <ContainerSC className="content-br">
      <LinkSC className="content" href={href}>
        <LeftSC>
          <LeftTopSC>
            <CategorySC>листогибочное оборудование</CategorySC>
            <TitleSC>{name}</TitleSC>
            <DescSC>{short_description}</DescSC>
          </LeftTopSC>
          <OutlinedButton>ПОДРОБНЕЕ</OutlinedButton>
        </LeftSC>
        <RightSC>
          <ImageSC src={image} alt={name} />
        </RightSC>
      </LinkSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  LinkSC,
  LeftSC,
  LeftTopSC,
  CategorySC,
  TitleSC,
  DescSC,
  RightSC,
  ImageSC,
} = styles;

export default React.memo(ProductCard);

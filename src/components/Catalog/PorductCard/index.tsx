import React from "react";
import { ProductModel } from "@/lib/models/ProductModel";
import { styles } from "@/components/Catalog/PorductCard/index.styles";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import { getImageUrl } from "@/lib/services";

const ProductCard = (props: ProductModel) => {
  const { category, name, short_description, slug, product_images } = props;
  const href = `${RoutesNamespace.CATALOG}/${category.slug}/${slug}`;
  const { image } = product_images.sort((a, b) => a.position - b.position)[0];

  return (
    <ContainerSC className="content-br">
      <LinkSC className="content" href={href}>
        <LeftSC>
          <LeftTopSC>
            <CategorySC>{category.name}</CategorySC>
            <TitleSC>{name}</TitleSC>
            <DescSC>{short_description}</DescSC>
          </LeftTopSC>
          <OutlinedButton>ПОДРОБНЕЕ</OutlinedButton>
        </LeftSC>
        <RightSC>
          <ImgSC src={getImageUrl(image)} alt={name} />
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
  ImgSC,
} = styles;

export default React.memo(ProductCard);

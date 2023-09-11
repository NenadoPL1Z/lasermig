import React from "react";
import { styles } from "@/components/ProductDetail/PDFirst/index.styles";
import CatalogBack from "@/components/Catalog/CatalogBack";
import { useRouter } from "next/router";
import { ProductDetailModel } from "@/lib/models/ProductDetailModel";

interface PDFirstProps extends Pick<ProductDetailModel, "tags" | "name"> {}

const PDFirst = ({ tags, name }: PDFirstProps) => {
  const { asPath } = useRouter();
  const path = asPath.split("/").slice(0, 3).join("/");

  return (
    <ContainerSC>
      <BackSC>
        <CatalogBack href={path} />
      </BackSC>
      {tags.length && (
        <TagsSC>
          {[...tags, ...tags, ...tags].map((tag) => (
            <TagSC key={tag}>{tag}</TagSC>
          ))}
        </TagsSC>
      )}
      <TitleSC>{name}</TitleSC>
    </ContainerSC>
  );
};

const { ContainerSC, BackSC, TagsSC, TagSC, TitleSC } = styles;

export default React.memo(PDFirst);

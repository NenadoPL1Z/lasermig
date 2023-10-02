import React from "react";
import { styles } from "@/components/ProductDetail/PDFirst/index.styles";
import CatalogBack from "@/components/Catalog/CatalogBack";
import { useRouter } from "next/router";
import { PDFirstProps } from "@/components/ProductDetail/types";

const PDFirst = ({ tags, name }: PDFirstProps) => {
  const { asPath } = useRouter();
  const path = asPath.split("/").slice(0, 3).join("/");

  return (
    <ContainerSC>
      <BackSC>
        <CatalogBack href={path} />
      </BackSC>
      {!!tags.length && (
        <TagsSC>
          {tags.map((tag) => (
            <TagSC key={tag}>
              <TagLinkSC href={path + `?tags=${tag}`}>{tag}</TagLinkSC>
            </TagSC>
          ))}
        </TagsSC>
      )}
      <TitleSC>{name}</TitleSC>
    </ContainerSC>
  );
};

const { ContainerSC, BackSC, TagsSC, TagSC, TagLinkSC, TitleSC } = styles;

export default React.memo(PDFirst);

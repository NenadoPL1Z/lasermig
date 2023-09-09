import React from "react";
import { CategoryModel } from "@/lib/models/CategoryModel";
import { styles } from "@/components/Home/HomeCategories/HCItem/index.styles";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import Link from "next/link";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { getImageUrl } from "@/lib/services";

const HCItem = ({ name, slug, image }: CategoryModel) => {
  const href = `${RoutesNamespace.CATALOG}/${slug}`;

  return (
    <ContainerSC className="content content-br">
      <LeftSC>
        <TitleSC>{name}</TitleSC>
        <OutlinedButton>
          <Link href={href}>Подробнее</Link>
        </OutlinedButton>
      </LeftSC>
      <RightSC>
        <ImgSC src={getImageUrl(image)} alt={name} />
      </RightSC>
    </ContainerSC>
  );
};

const { ContainerSC, LeftSC, TitleSC, RightSC, ImgSC } = styles;

export default React.memo(HCItem);

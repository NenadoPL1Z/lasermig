import React from "react";
import { CategoryModel } from "@/lib/models/CategoryModel";
import { styles } from "@/components/Home/HomeCategories/HCItem/index.styles";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import Link from "next/link";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { getImageUrl } from "@/lib/services";

interface HCItemProps extends CategoryModel {
  count: number;
}

const HCItem = ({ name, slug, image, count }: HCItemProps) => {
  const href = `${RoutesNamespace.CATALOG}/${slug}`;
  const isAlternative = count === 2;

  return (
    <ContainerSC
      className={`content content-br grid-${count}`}
      isAlternative={isAlternative}>
      <LeftSC>
        <TitleSC isAlternative={isAlternative}>{name}</TitleSC>
        <OutlinedButton>
          <Link href={href}>Подробнее</Link>
        </OutlinedButton>
      </LeftSC>
      <RightSC>
        <ImgSC
          isAlternative={isAlternative}
          src={getImageUrl(image)}
          alt={name}
        />
      </RightSC>
    </ContainerSC>
  );
};

const { ContainerSC, LeftSC, TitleSC, RightSC, ImgSC } = styles;

export default React.memo(HCItem);

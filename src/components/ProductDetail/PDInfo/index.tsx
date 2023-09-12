import React from "react";
import { styles } from "@/components/ProductDetail/PDInfo/index.styles";
import PDInfoItem from "@/components/ProductDetail/PDInfoItem";
import { PDInfoProps } from "@/components/ProductDetail/types";
import { usePDInfo } from "@/components/ProductDetail/PDInfo/usePDInfo";

const PDInfo = (props: PDInfoProps) => {
  const { advantages, product_characteristics, accessories, guarantees } =
    props;

  const {
    isVisible,
    isAdvantages,
    isCharacteristics,
    isAccessories,
    isGuarantees,
  } = usePDInfo(props);

  if (!isVisible) {
    return null;
  }

  return (
    <ContainerSC>
      <LeftSC>
        <TitleSC>ИНФОРМАЦИЯ</TitleSC>
      </LeftSC>
      <RightSC className="content content-br">
        {advantages && (
          <PDInfoItem title="ПРЕИМУЩЕСТВА" initialOpen={isAdvantages}>
            <ContentSC>
              <TextSC>{advantages}</TextSC>
            </ContentSC>
          </PDInfoItem>
        )}
        {!!product_characteristics?.length && (
          <PDInfoItem title="ХАРАКТЕРИСТИКИ" initialOpen={isCharacteristics}>
            <ContentSC>
              <ListSC>
                {product_characteristics
                  .sort((a, b) => a.position - b.position)
                  .map((item) => (
                    <CharacteristicsItemSC key={item.name}>
                      <LeftItemSC>{item.name}</LeftItemSC>
                      <RightItemSC>{item.value}</RightItemSC>
                    </CharacteristicsItemSC>
                  ))}
              </ListSC>
            </ContentSC>
          </PDInfoItem>
        )}
        {accessories && (
          <PDInfoItem title="КОМПЛЕКТУЮЩИЕ" initialOpen={isAccessories}>
            <ContentSC>
              <TextSC>{accessories}</TextSC>
            </ContentSC>
          </PDInfoItem>
        )}
        {guarantees && (
          <PDInfoItem title="ГАРАНТИИ" initialOpen={isGuarantees}>
            <ContentSC>
              <TextSC>{guarantees}</TextSC>
            </ContentSC>
          </PDInfoItem>
        )}
      </RightSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  TitleSC,
  LeftSC,
  RightSC,
  ContentSC,
  TextSC,
  ListSC,
  CharacteristicsItemSC,
  LeftItemSC,
  RightItemSC,
} = styles;

export default React.memo(PDInfo);

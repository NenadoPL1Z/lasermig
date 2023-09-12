import React, { useEffect, useState } from "react";
import { NDTopProps } from "@/components/News/NewsDetail/types";
import { styles } from "@/components/News/NewsDetail/NDTop/index.styles";
import ImgPage from "@/components/ImgPage";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { getFormatDate } from "@/lib/services";
import Copy from "@/UI/Copy";

const NDTop = ({ slug, title, tags, date, image }: NDTopProps) => {
  const [clientDate, setClientDate] = useState(date);

  useEffect(() => {
    setClientDate(getFormatDate(date));
  }, []);

  return (
    <ContainerSC className="padding">
      <ImgPage url={image}>
        <WrapperSC>
          <LeftSC>
            <LeftTopSC>
              <BackSC href={RoutesNamespace.NEWS}>
                <NewsBackIconSC />
                ВЕРНУТСЯ
              </BackSC>
            </LeftTopSC>
            <LeftBottomSC>
              <TagsSC>
                {tags.map((tagItem) => (
                  <TagSC key={tagItem}>
                    <TagLinkSC href={`${RoutesNamespace.NEWS}?tags=${tagItem}`}>
                      {tagItem}
                    </TagLinkSC>
                  </TagSC>
                ))}
              </TagsSC>
              <TitleSC>{title}</TitleSC>
              <DateSC>{clientDate}</DateSC>
            </LeftBottomSC>
          </LeftSC>
          <RightSC>
            <Copy href={`${RoutesNamespace.NEWS}/${slug}`} />
          </RightSC>
        </WrapperSC>
      </ImgPage>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  WrapperSC,
  LeftSC,
  LeftTopSC,
  NewsBackIconSC,
  LeftBottomSC,
  BackSC,
  TagsSC,
  TagSC,
  TagLinkSC,
  TitleSC,
  DateSC,
  RightSC,
} = styles;

export default React.memo(NDTop);

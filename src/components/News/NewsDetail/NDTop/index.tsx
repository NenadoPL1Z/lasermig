import React, { useEffect, useState } from "react";
import { NDTopInterface } from "@/components/News/NewsDetail/types";
import { styles } from "@/components/News/NewsDetail/NDTop/index.styles";
import ImgPage from "@/components/ImgPage";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { getFormatDate } from "@/lib/services";
import Copy from "@/UI/Copy";

const NDTop = ({ slug, title, tags, date, image }: NDTopInterface) => {
  const [clientDate, setClientDate] = useState(date);

  useEffect(() => {
    setClientDate(getFormatDate(date));
  }, []);

  return (
    <ContainerSC className="padding">
      <ImgPage url={image}>
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
                <TagSC key={tagItem}>{tagItem}</TagSC>
              ))}
            </TagsSC>
            <TitleSC>{title}</TitleSC>
            <DateSC>{clientDate}</DateSC>
          </LeftBottomSC>
        </LeftSC>
        <RightSC>
          <Copy href={`${RoutesNamespace.NEWS}/${slug}`} />
        </RightSC>
      </ImgPage>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  LeftSC,
  LeftTopSC,
  NewsBackIconSC,
  LeftBottomSC,
  BackSC,
  TagsSC,
  TagSC,
  TitleSC,
  DateSC,
  RightSC,
} = styles;

export default React.memo(NDTop);

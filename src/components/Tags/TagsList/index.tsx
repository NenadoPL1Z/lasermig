import React from "react";
import { TagsListProps } from "@/components/Tags/types";
import { styles } from "@/components/Tags/TagsList/index.styles";
import TagItem from "@/components/Tags/TagItem";

const TagsList = ({ tags }: TagsListProps) => {
  return (
    <ContainerSC className="padding">
      {tags.map((item) => (
        <TagItem key={item.id} {...item} />
      ))}
    </ContainerSC>
  );
};

const { ContainerSC } = styles;

export default React.memo(TagsList);

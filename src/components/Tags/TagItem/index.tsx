import React from "react";
import { styles } from "@/components/Tags/TagItem/index.styles";
import { TagModel } from "@/lib/models/TagModel";
import { TagButton } from "@/UI/Buttons/TagButton";
import { useTagItem } from "@/components/Tags/TagItem/useTagItem";

const TagItem = (props: TagModel) => {
  const { name } = props;
  const { isActive, handleClick } = useTagItem(props);

  return (
    <ContainerSC>
      <TagButton active={isActive} onClick={handleClick}>
        {name}
        {isActive && <ResetSC />}
      </TagButton>
    </ContainerSC>
  );
};

const { ContainerSC, ResetSC } = styles;

export default React.memo(TagItem);

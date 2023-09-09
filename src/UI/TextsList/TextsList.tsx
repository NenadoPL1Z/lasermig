import React from "react";
import { styles } from "@/UI/TextsList/index.styles";

interface TextsListProps {
  item: string[];
  variant?: "number" | "dot";
}

const TextsList = ({ item, variant }: TextsListProps) => {
  const List = variant === "number" ? NumberListSC : ListSC;

  return (
    <List className="content-margin48">
      {item.map((item) => (
        <ItemSC key={item}>{item}</ItemSC>
      ))}
    </List>
  );
};

const { ListSC, NumberListSC, ItemSC } = styles;

export default React.memo(TextsList);

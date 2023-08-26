import React from "react";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";

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

const ListSC = styled("ul")`
  padding-left: 55px;
  list-style-type: disc;
`;

const NumberListSC = styled("ol")`
  padding-left: 55px;
  list-style-type: number;
`;

const ItemSC = styled("li")`
  color: ${ColorScheme.PRIMARY};

  font-family: ${FontNamespace.SF};

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 5px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

export default React.memo(TextsList);

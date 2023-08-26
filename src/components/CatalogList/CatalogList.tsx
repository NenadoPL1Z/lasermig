import React from "react";
import { styled } from "@mui/material";
import CatalogCard from "@/UI/ Cards/CatalogCard/CatalogCard";

const CatalogList = () => {
  return (
    <ContainerSC>
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default React.memo(CatalogList);

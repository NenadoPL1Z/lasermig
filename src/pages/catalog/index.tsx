import React from "react";
import { PageTitleSC } from "@/UI/PageTitleSC";
import CatalogList from "@/components/CatalogList/CatalogList";
import { styled } from "@mui/material";

const Catalog = () => {
  return (
    <>
      <PageTitleSC>Каталог</PageTitleSC>
      <CatalogListContainerSC>
        <CatalogList />
      </CatalogListContainerSC>
    </>
  );
};

const CatalogListContainerSC = styled("section")`
  margin-top: 50px;
`;

export default React.memo(Catalog);

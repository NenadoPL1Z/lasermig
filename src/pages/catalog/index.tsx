import React from "react";
import { H1SC } from "@/UI/H1SC";

const Catalog = () => {
  return (
    <>
      <H1SC>Каталог</H1SC>
      {/*<CatalogListContainerSC>*/}
      {/*  <CatalogList />*/}
      {/*</CatalogListContainerSC>*/}
    </>
  );
};

// const CatalogListContainerSC = styled("section")`
//   margin-top: 50px;
// `;

export default React.memo(Catalog);

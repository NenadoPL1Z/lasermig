import React from "react";
import { styles } from "@/components/Catalog/CatalogBack/index.styles";
import Link from "next/link";

interface CatalogBackProps {
  href: string;
}

const CatalogBack = ({ href }: CatalogBackProps) => {
  return (
    <Link href={href}>
      <BackSC>
        <BackIconSC />
        Вернуться в каталог
      </BackSC>
    </Link>
  );
};

const { BackSC, BackIconSC } = styles;

export default React.memo(CatalogBack);

import React from "react";
import Head from "next/head";
import { headData } from "@/lib/mock/headData";
import { ChildrenProps } from "@/types/types";

type TitleLayoutProps = {
  title?: string;
} & ChildrenProps;

const TitleLayout = ({ children, title = "" }: TitleLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? `${title}` : headData.titleFull}</title>
      </Head>
      {children}
    </>
  );
};

export default React.memo(TitleLayout);

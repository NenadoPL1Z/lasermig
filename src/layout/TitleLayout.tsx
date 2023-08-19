import React from "react";
import Head from "next/head";
import { headMock } from "@/lib/mock/headMock";
import { ChildrenProps } from "@/types/types";

type TitleLayoutProps = {
  title?: string;
} & ChildrenProps;

const TitleLayout = ({ children, title = "" }: TitleLayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${headMock.titleSmall} ${title}` : headMock.titleFull}
        </title>
      </Head>
      {children}
    </>
  );
};

export default React.memo(TitleLayout);

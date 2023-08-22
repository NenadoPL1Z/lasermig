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
        <meta charSet="utf-8" />
        <title>
          {title ? `${headData.titleSmall} ${title}` : headData.titleFull}
        </title>
        <meta name="description" content={headData.desc} />
        <meta property="og:title" content={headData.titleFull} />
        <meta property="og:description" content={headData.desc} />
        <meta property="og:street-address" content={headData.address} />
        <meta property="og:locality" content={headData.localy} />
      </Head>
      {children}
    </>
  );
};

export default React.memo(TitleLayout);

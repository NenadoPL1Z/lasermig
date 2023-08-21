import React from "react";
import type { AppProps } from "next/app";
import MainLayout from "@/layout/MainLayout";
import GlobalStyles from "@/styles/GlobalStyles";
import ErrorBoundary from "@/layout/ErrorBoundary";

import "@/styles/global.css";
import "normalize.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </MainLayout>
      <GlobalStyles />
    </>
  );
}

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChildrenProps } from "@/types/types";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import Cookie from "@/components/Cookie";

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className="container">{children}</main>
      <Footer />
      <Cookie />
    </ThemeProvider>
  );
};

export default React.memo(MainLayout);

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChildrenProps } from "@/types/types";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default React.memo(MainLayout);

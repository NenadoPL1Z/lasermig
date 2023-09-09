import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import Questions from "@/components/Questions";
import Advantages from "@/components/Advantages";
import Orders from "@/components/Orders";
import { styles } from "@/styles/pages/home.styles";

export default function Home() {
  return (
    <TitleLayout>
      <Advantages />
      <ContainerSC>
        <Orders />
      </ContainerSC>
      <Questions />
    </TitleLayout>
  );
}

const { ContainerSC } = styles;

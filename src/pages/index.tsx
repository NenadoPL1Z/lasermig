import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import Questions from "@/components/Questions";
import Advantages from "@/components/Advantages";
import Orders from "@/components/Orders";
import { styles } from "@/styles/pages/home.styles";
import HomeAbout from "@/components/HomeAbout";
import { GetServerSideProps } from "next";
import { fetchGetMain, FetchGetMainRequest } from "@/lib/api/fetchGetMain";

interface HomeProps extends FetchGetMainRequest {}

const Home = ({ slider }: HomeProps) => {
  return (
    <TitleLayout>
      <ContainerSC>
        <HomeAbout slider={slider} />
      </ContainerSC>
      <ContainerSC>
        <Advantages />
      </ContainerSC>
      <ContainerSC>
        <Orders />
      </ContainerSC>
      <Questions />
    </TitleLayout>
  );
};

const { ContainerSC } = styles;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const main = await fetchGetMain();
  return { props: main };
};

export default React.memo(Home);

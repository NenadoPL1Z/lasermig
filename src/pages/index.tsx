import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import Questions from "@/components/Questions";
import Advantages from "@/components/Advantages";
import Orders from "@/components/Orders";
import { styles } from "@/styles/pages/home.styles";
import HomeAbout from "@/components/Home/HomeAbout";
import { GetServerSideProps } from "next";
import { fetchGetMain, FetchGetMainResponse } from "@/lib/api/fetchGetMain";
import HomeCategories from "@/components/Home/HomeCategories";
import HomeBg from "@/components/Home/HomeBg";
import HomeNews from "@/components/Home/HomeNews";

interface HomeProps extends FetchGetMainResponse {}

const Home = ({ slider, category, news }: HomeProps) => {
  return (
    <TitleLayout>
      <ContainerSC className="padding">
        <HomeAbout slider={slider} />
        <HomeBg />
      </ContainerSC>
      <ContainerSC className="padding">
        <HomeCategories categories={category} />
      </ContainerSC>
      <ContainerSC className="padding">
        <Advantages />
      </ContainerSC>
      <ContainerSC>
        <Orders />
      </ContainerSC>
      <ContainerSC className="padding">
        <Questions />
      </ContainerSC>
      <div className="padding">
        <HomeNews news={news} />
      </div>
    </TitleLayout>
  );
};

const { ContainerSC } = styles;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const main = await fetchGetMain();
  return { props: main };
};

export default React.memo(Home);

import React from "react";
import { styled } from "@mui/material";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import { CatalogModel } from "@/lib/models/CatalogModel";
import Link from "next/link";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";

interface CatalogCard {}

const CatalogCard = ({
  slug = "test",
  title = "токарное и фрезерное оборудование",
  image = { alt: "photo", url: "/assets/images/catalog.png" },
}: Partial<CatalogModel>) => {
  const href = `/catalog/${slug}`;

  return (
    <ContainerSC href={href}>
      <ImgSC alt={image.alt} src={image.url} />
      <TitleSC>{title}</TitleSC>
      <ButtonSC href={href}>Подробнее</ButtonSC>
    </ContainerSC>
  );
};

const ContainerSC = styled(Link)`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 520px;
  padding: 30px;

  border-radius: 40px;
  background-color: ${ColorScheme.WHITE};
`;
const ImgSC = styled("img")`
  width: 100%;
  height: 100%;
  max-height: 320px;

  margin-bottom: 51px;
  object-fit: cover;
`;
const TitleSC = styled("h4")`
  margin-bottom: 24px;

  font-family: ${FontNamespace.BN};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonSC = styled(OutlinedButton)``;

export default React.memo(CatalogCard);

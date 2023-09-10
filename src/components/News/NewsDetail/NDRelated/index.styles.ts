import Link from "next/link";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { H1SC } from "@/UI/H1SC";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import OpenIcon from "@/assets/icons/OpenIcon.svg";

const TopSC = styled("div")`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

const TitleSC = styled(H1SC)`
  font-size: 48px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 32px;
  }
`;

const LinkSC = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DescButtonSC = styled(OutlinedButton)`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

const MobileButtonSC = styled(OutlinedButton)`
  display: none;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 16px;
    display: flex;
  }
`;

const OpenSC = styled(OpenIcon)`
  width: 20px;
  height: 20px;

  margin-left: 8px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 16px;
    height: 16px;
  }
`;

const ListSC = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 10px;
  list-style-type: none;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    grid-template-columns: 1fr;
  }
`;

export const styles = {
  TopSC,
  TitleSC,
  LinkSC,
  DescButtonSC,
  MobileButtonSC,
  OpenSC,
  ListSC,
};

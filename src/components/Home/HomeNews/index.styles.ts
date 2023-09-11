import { styled } from "@mui/material";
import { H1SC } from "@/UI/H1SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import OpenIcon from "@/assets/icons/OpenIcon.svg";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import Link from "next/link";

const TopSC = styled("div")`
  display: flex;
  justify-content: space-between;

  margin-bottom: 44px;

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

const LinkSC = styled(Link)``;

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
  gap: 20px;
  list-style-type: none;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    gap: 16px;
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

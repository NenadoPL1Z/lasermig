import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ColorScheme from "@/styles/theme/ColorScheme";
import { H1SC } from "@/UI/H1SC";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";

const ImgSC = styled("img")`
  padding-top: 50px;
  display: block;

  width: 100%;
  height: 100%;
  max-height: 704px;

  align-self: center;

  object-fit: contain;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    max-height: 500px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-top: 0;
    margin-bottom: 16px;
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    max-height: 200px;
  }
`;

const ContainerSC = styled("div")`
  display: flex;
  min-height: 550px;
  max-height: 637px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    min-height: auto;
    max-height: none;

    flex-direction: column;
  }
`;

const LeftSC = styled("div")`
  width: 100%;
  max-width: 715px;
  min-width: 550px;

  margin-right: 22px;

  display: flex;
  flex-direction: column;

  background-color: ${ColorScheme.WHITE};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    height: auto;
    max-width: none;
    min-width: auto;
    margin-right: 0;

    order: 2;
  }
`;

const TitleSC = styled(H1SC)`
  flex-grow: 1;
  font-size: 82px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    font-size: 64px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 36px;
    margin-right: 10px;
    margin-bottom: 32px;
  }
`;

const DescSC = styled("p")`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const BottomSC = styled("div")`
  display: flex;
  align-items: center;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    justify-content: space-between;
  }
`;

const ButtonSC = styled(DefaultButton)`
  height: 64px;

  margin-right: 11px;
`;

export const styles = {
  ContainerSC,
  LeftSC,
  TitleSC,
  DescSC,
  BottomSC,
  ButtonSC,
  ImgSC,
};

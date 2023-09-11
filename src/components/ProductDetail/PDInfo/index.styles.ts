import { styled } from "@mui/material";
import { H1SC } from "@/UI/H1SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ColorScheme from "@/styles/theme/ColorScheme";

const ContainerSC = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 118px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
    flex-direction: column;
  }
`;

const TitleSC = styled(H1SC)`
  font-size: 48px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 32px;
  }
`;

const LeftSC = styled("div")`
  min-width: 280px;
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    min-width: auto;
    margin-bottom: 16px;
    margin-right: 0;
  }
`;

const RightSC = styled("div")`
  width: 100%;
  max-width: 1060px;
  background-color: ${ColorScheme.WHITE};

  & > *:first-child {
    & > div {
      padding-top: 0;
    }
  }

  & > *:last-child {
    border-bottom-width: 0;
    padding-bottom: 0;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
  }
`;

const ContentSC = styled("div")`
  padding-top: 36px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-top: 16px;
  }
`;

const TextSC = styled("p")`
  font-size: 18px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

const ListSC = styled("ul")`
  list-style-type: none;
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const CharacteristicsItemSC = styled("li")`
  display: flex;
  justify-content: space-between;

  padding-bottom: 16px;
  margin-bottom: 16px;

  border-bottom-width: 1px;
  border-bottom-color: ${ColorScheme.TERTIARY};
  border-bottom-style: dashed;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
`;

const LeftItemSC = styled("p")`
  flex: 1;
  font-size: 18px;
  padding-right: 10px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    padding-right: 0;
    margin-bottom: 8px;
  }
`;

const RightItemSC = styled("p")`
  flex: 1;
  font-size: 18px;
  color: ${ColorScheme.PRIMARY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    padding-right: 0;
  }
`;

export const styles = {
  ContainerSC,
  TitleSC,
  LeftSC,
  RightSC,
  ContentSC,
  TextSC,
  ListSC,
  CharacteristicsItemSC,
  LeftItemSC,
  RightItemSC,
};

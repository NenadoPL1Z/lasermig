import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { H1SC } from "@/UI/H1SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("div")`
  display: flex;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
  }
`;

const LeftSC = styled("div")`
  width: 100%;

  max-width: 520px;

  margin-right: 20px;

  background-color: ${ColorScheme.ACCENT};

  background-image: url("/assets/images/AdvantageBg.png");
  background-repeat: no-repeat;
  background-position: left bottom;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
    height: 168px;
    margin-bottom: 16px;

    background-size: 131px 131px;
    background-position: left bottom -55px;
  }
`;

const TitleSC = styled(H1SC)`
  max-width: 365px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
  }
`;

const RightSC = styled("ul")`
  width: 100%;
  flex-shrink: 0.7;

  background-color: ${ColorScheme.WHITE};
  list-style-type: none;

  & > *:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom-width: 0;
  }
`;

export const styles = {
  ContainerSC,
  TitleSC,
  LeftSC,
  RightSC,
};

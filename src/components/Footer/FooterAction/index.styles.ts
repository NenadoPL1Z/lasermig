import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { LinkSC } from "@/UI/LinkSC";
import ColorScheme from "@/styles/theme/ColorScheme";

const ContainerSC = styled("section")`
  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 36px;
  }
`;
const TelSC = styled(LinkSC)`
  color: ${ColorScheme.WHITE};

  font-size: 32px;
  font-weight: 700;

  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;
const EmailSC = styled(LinkSC)`
  color: ${ColorScheme.WHITE};

  font-size: 32px;
  font-weight: 700;

  margin-bottom: 36px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const styles = {
  ContainerSC,
  TelSC,
  EmailSC,
};

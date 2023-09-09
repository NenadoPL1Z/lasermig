import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { LinkSC } from "@/UI/LinkSC";
import ColorScheme from "@/styles/theme/ColorScheme";

const ContainerSC = styled("section")`
  display: flex;
  align-items: center;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
  }
`;

const TelSC = styled(LinkSC)`
  margin-right: 24px;
  color: ${ColorScheme.PRIMARY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 8px;

    font-weight: 700;
  }
`;

export const styles = {
  ContainerSC,
  TelSC,
};

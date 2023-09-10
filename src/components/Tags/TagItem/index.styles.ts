import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ResetIcon from "@/assets/icons/ResetIcon.svg";

const ContainerSC = styled("li")`
  margin-right: 10px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-right: 8px;
  }
`;

const ResetSC = styled(ResetIcon)`
  margin-left: 8px;
`;

export const styles = {
  ContainerSC,
  ResetSC,
};

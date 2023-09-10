import { styled } from "@mui/material";
import LeftIcon from "@/assets/icons/LeftIcon.svg";
import RightIcon from "@/assets/icons/RightIcon.svg";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("div")`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const LeftIconSC = styled(LeftIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 16px;
    height: 16px;
  }
`;
const RightIconSC = styled(RightIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 16px;
    height: 16px;
  }
`;

export const styles = {
  ContainerSC,
  LeftIconSC,
  RightIconSC,
};

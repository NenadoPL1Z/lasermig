import { styled } from "@mui/material";
import { H1SC } from "@/UI/H1SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import OpenIcon from "@/assets/icons/OpenIcon.svg";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";

const TopSC = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const TitleSC = styled(H1SC)`
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const DescButtonSC = styled(OutlinedButton)`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

const OpenSC = styled(OpenIcon)`
  width: 20px;
  height: 20px;

  margin-left: 8px;
`;

export const styles = { TopSC, TitleSC, DescButtonSC, OpenSC };

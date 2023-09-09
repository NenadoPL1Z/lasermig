import { Button, Drawer, styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const DrawerSC = styled(Drawer)`
  @media (min-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }

  .MuiPaper-root {
    width: 70%;
    max-width: 230px;

    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
  }
`;

const ContainerSC = styled("div")`
  height: 100%;
  padding: 8px 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 116px;
  margin-bottom: 25px;
`;

const CloseButtonSC = styled(Button)`
  position: absolute;
  top: 8px;
  right: 16px;
`;
export const styles = {
  DrawerSC,
  ContainerSC,
  CloseButtonSC,
};

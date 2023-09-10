import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("ul")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  list-style-type: none;
`;

const BottomSC = styled("div")`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 16px;
  }
`;

export const styles = {
  ContainerSC,
  BottomSC,
};

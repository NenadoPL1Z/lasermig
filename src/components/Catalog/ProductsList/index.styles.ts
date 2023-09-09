import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ListSC = styled("ul")`
  list-style-type: none;
`;

const BottomSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 60px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 16px;
  }
`;

export const styles = {
  ListSC,
  BottomSC,
};

import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const WrapperSC = styled("div")`
  display: none;
  padding: 8px 16px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const LeftSC = styled("section")`
  height: 36px;
`;
const MiddleSC = styled("section")`
  width: 128px;
  height: 24px;
`;
const RightSC = styled("section")`
  height: 36px;
`;

export const styles = {
  WrapperSC,
  LeftSC,
  MiddleSC,
  RightSC,
};

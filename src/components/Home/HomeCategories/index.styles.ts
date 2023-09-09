import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("ul")`
  display: grid;
  //grid-template-columns: 80% 80% minmax(250px, 520px);
  //grid-template-rows: 285px 285px 2000px;
  //grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;

  list-style-type: none;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }
`;

export const styles = {
  ContainerSC,
};

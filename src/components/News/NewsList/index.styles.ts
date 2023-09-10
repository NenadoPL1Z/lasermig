import { styled } from "@mui/material";

const ContainerSC = styled("ul")`
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto;

  list-style-type: none;
`;
export const styles = {
  ContainerSC,
};

import { styled } from "@mui/material";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ButtonSC = styled(DefaultButton)`
  width: 197px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 0;
  padding-right: 0;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 143px;
  }
`;

export const styles = {
  ButtonSC,
};

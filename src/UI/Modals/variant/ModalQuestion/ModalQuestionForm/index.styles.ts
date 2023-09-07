import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";

const FormSC = styled("form")`
  display: flex;
  flex-direction: column;
`;

const FormItemSC = styled("div")`
  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

const ButtonSC = styled(DefaultButton)`
  max-width: 179px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
  }
`;

export const styles = {
  FormSC,
  FormItemSC,
  ButtonSC,
};

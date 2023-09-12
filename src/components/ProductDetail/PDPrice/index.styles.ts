import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { H3SC } from "@/UI/H3SC";

const ButtonSC = styled(DefaultButton)`
  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    flex-grow: 1;
  }
`;

const PriceSC = styled("div")`
  margin-left: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-left: 16px;
  }
`;

const PriceLabelSC = styled("p")`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
    margin-bottom: 4px;
  }
`;

const PriceSumSC = styled(H3SC)`
  font-size: 24px;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 18px;
  }
`;

export const styles = {
  ButtonSC,
  PriceSC,
  PriceLabelSC,
  PriceSumSC,
};

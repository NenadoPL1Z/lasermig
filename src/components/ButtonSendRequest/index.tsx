import React, { useState } from "react";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import ModalCall from "@/UI/Modals/variant/ModalCall";

const Index = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonSC onClick={() => setIsOpen(true)}>Оставить заявку</ButtonSC>
      <ModalCall isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
};

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

export default React.memo(Index);

import React, { useState } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ModalCall from "@/UI/Modals/ModalCall";

const Request = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonSC onClick={() => setIsOpen(true)}>Оставить заявку</ButtonSC>
      <ModalCall open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const ButtonSC = styled(Button)`
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

export default React.memo(Request);

import React, { useState } from "react";
import ModalCall from "@/UI/Modals/variant/ModalCall";
import { styles } from "@/components/CallButton/index.styles";

const CallButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonSC onClick={() => setIsOpen(true)}>Оставить заявку</ButtonSC>
      <ModalCall isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
};

const { ButtonSC } = styles;

export default React.memo(CallButton);

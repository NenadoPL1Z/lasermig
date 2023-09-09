import { useState } from "react";

export const useToggle = (initialToggle = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialToggle);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleToggleState = (state: boolean) => {
    setIsOpen(state);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleToggle,
    handleToggleState,
    handleOpen,
    handleClose,
  };
};

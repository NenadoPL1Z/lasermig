import { useEffect, useState } from "react";

export const useCookie = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(!localStorage.getItem("@cookie"));
  }, []);

  const handleClick = () => {
    localStorage.setItem("@cookie", "true");
    setIsVisible(false);
  };

  return {
    isVisible,
    handleClick,
  };
};

import { useEffect, useState } from "react";
import { useMobile } from "@/hooks/useMedia";

export const useHeader = () => {
  const isMobile = useMobile();
  const [isVisibleHeader, setIsVisibleHeader] = useState<boolean>(true);

  const handleChangeVisible = (state: boolean) => {
    setIsVisibleHeader(state);
  };

  useEffect(() => {
    if (isMobile && !isVisibleHeader) {
      setIsVisibleHeader(true);
    }
  }, [isMobile]);

  return {
    isMobile,
    isVisibleHeader,
    handleChangeVisible,
  };
};

import { useEffect, useState } from "react";
import { CopyProps } from "@/UI/Copy/types";

export const useCopy = ({ href }: CopyProps) => {
  const [websiteName, setWebsiteName] = useState<string>("");
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText(`${websiteName}/${href}`).then(() => {
      setIsCopy(true);
    });
  };

  useEffect(() => {
    setWebsiteName(window.location.origin);
  }, []);

  useEffect(() => {
    if (!isCopy) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsCopy(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopy]);

  return {
    isCopy,
    handleClick,
  };
};

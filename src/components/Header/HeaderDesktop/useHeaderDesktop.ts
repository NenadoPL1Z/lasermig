import { useEffect } from "react";
import { HeaderDesktopProps } from "@/components/Header/HeaderDesktop/index";

export const useHeaderDesktop = ({
  handleChangeVisible,
}: HeaderDesktopProps) => {
  useEffect(() => {
    let prevState: number = 0;
    const onScroll = () => {
      const lastScroll = window.pageYOffset;
      handleChangeVisible(lastScroll <= prevState);
      prevState = lastScroll;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
};

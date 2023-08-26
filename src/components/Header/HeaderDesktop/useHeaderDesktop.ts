import { useEffect } from "react";
import { HeaderDesktopProps } from "@/components/Header/HeaderDesktop/index";
import { useRouter } from "next/router";

const visibleHeaderRoutes = ["/404", "/500"];

export const useHeaderDesktop = ({
  handleChangeVisible,
}: HeaderDesktopProps) => {
  const { pathname } = useRouter();
  const isHide = !visibleHeaderRoutes.find((item) => item === pathname);

  useEffect(() => {
    let prevState: number = 0;
    const onScroll = () => {
      const lastScroll = window.pageYOffset;
      handleChangeVisible(lastScroll <= prevState);
      prevState = lastScroll;
    };

    if (isHide) {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHide]);
};

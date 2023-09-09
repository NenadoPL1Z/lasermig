import { useRouter } from "next/router";
import { HeaderDrawerProps } from "@/components/Header/HeaderMobile/HeaderDrawer/types";

export const useHeaderDrawer = (props: HeaderDrawerProps) => {
  const { pathname } = useRouter();
  const { onClose } = props;

  const handleClose = () => {
    if (onClose) {
      // eslint-disable-next-line
      (onClose as any)();
    }
  };

  const callbackClose = (path: string) => {
    return () => {
      const isScrollTop = path === pathname;
      handleClose();

      if (isScrollTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  };

  return {
    handleClose,
    callbackClose,
  };
};

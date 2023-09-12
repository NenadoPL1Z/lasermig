import { useRouter } from "next/router";

export const useScrollTop = (route: string) => {
  const { pathname, push } = useRouter();
  const isCurent = pathname === route;

  const handleClick = () => {
    if (isCurent) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (!isCurent) {
      push(route);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    handleClick,
  };
};

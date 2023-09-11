import { useRouter } from "next/router";

export const useTags = () => {
  const { query, push, asPath } = useRouter();

  const tags = (((query?.tags as string) || "").split(",") || []).filter(
    (item) => item,
  );

  return {
    tags,
    push,
    query,
    asPath: asPath.split("?")[0],
  };
};

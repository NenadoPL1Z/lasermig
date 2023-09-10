import { useRouter } from "next/router";

export const useTags = () => {
  const { query, push } = useRouter();

  const tags = (((query?.tags as string) || "").split(",") || []).filter(
    (item) => item,
  );

  return {
    tags,
    push,
  };
};

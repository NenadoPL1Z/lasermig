import { useRouter } from "next/router";
import { TagModel } from "@/lib/models/TagModel";

export const useTagItem = ({ name }: TagModel) => {
  const { query, push } = useRouter();

  const tags = (((query?.tags as string) || "").split(",") || []).filter(
    (item) => item,
  );

  const isActive = !!tags.find((item) => item === name);

  const handleClick = () => {
    if (!isActive) {
      push({ query: `tags=${tags}${tags.length ? "," : ""}${name}` });
    }
    if (isActive) {
      const result = tags.filter((item) => item !== name);
      push({ query: result.length ? `tags=${result}` : "" });
    }
  };

  return {
    isActive,
    handleClick,
  };
};

import { TagModel } from "@/lib/models/TagModel";
import { useTags } from "@/hooks/useTags";

export const useTagItem = ({ name }: TagModel) => {
  const { tags, push } = useTags();

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

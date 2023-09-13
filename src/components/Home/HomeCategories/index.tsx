import React from "react";
import { HomeCategoriesProps } from "@/components/Home/types";
import { styles } from "@/components/Home/HomeCategories/index.styles";
import HCItem from "@/components/Home/HomeCategories/HCItem";
import { CategoriesArr } from "@/lib/models/CategoryModel";
import { useMobile } from "@/hooks/useMedia";

const HomeCategories = ({ categories }: HomeCategoriesProps) => {
  const isMobile = useMobile();

  const first = !isMobile
    ? (JSON.parse(JSON.stringify(categories.slice(0, 3))) as CategoriesArr)
    : categories;

  const second = !isMobile
    ? (JSON.parse(JSON.stringify(categories.slice(3))) as CategoriesArr)
    : [];

  let count = 0;

  const increment = () => {
    count += 1;
    if (count > 3) {
      count = 1;
    }
  };

  return (
    <>
      <FirstSC>
        {first.map((category) => {
          increment();
          return <HCItem key={category.slug} count={count} {...category} />;
        })}
      </FirstSC>
      {!!second.length && (
        <SecondSC>
          {second.map((category) => (
            <HCItem key={category.slug} count={0} {...category} />
          ))}
        </SecondSC>
      )}
    </>
  );
};

const { FirstSC, SecondSC } = styles;

export default React.memo(HomeCategories);

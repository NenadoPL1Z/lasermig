import React from "react";
import { NewsListProps } from "@/components/News/types";
import NewsCard from "@/components/News/NewsCard";
import { styles } from "@/components/News/NewsList/index.styles";
import { useNewsList } from "@/components/News/NewsList/useNewsList";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import { CircularProgress } from "@mui/material";
import { getNewsGridClass } from "@/lib/services";

const NewsList = (props: NewsListProps) => {
  const { isEnd, isLoading, localResult, handleLoadMore } = useNewsList(props);
  let counter = 0;

  const increment = () => {
    counter += 1;
    if (counter > 7) {
      counter = 1;
    }
  };

  return (
    <>
      <ContainerSC>
        {localResult.map((item) => {
          //? ГРЯЗНО, НО РАБОТАЕТ. ДЛЯ ФРИЛАНСА СОЙДЕТ :)
          increment();
          return (
            <li className={getNewsGridClass(counter)} key={item.slug}>
              <NewsCard {...item} />
            </li>
          );
        })}
      </ContainerSC>
      {!isEnd && (
        <BottomSC>
          <OutlinedButton onClick={handleLoadMore}>
            {isLoading && <CircularProgress />}
            {!isLoading && "Показать еще"}
          </OutlinedButton>
        </BottomSC>
      )}
    </>
  );
};

const { ContainerSC, BottomSC } = styles;

export default React.memo(NewsList);

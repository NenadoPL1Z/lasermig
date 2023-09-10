import React from "react";
import { NewsListProps } from "@/components/News/types";
import NewsCard from "@/components/News/NewsCard";
import { styles } from "@/components/News/NewsList/index.styles";
import { useNewsList } from "@/components/News/NewsList/useNewsList";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import { CircularProgress } from "@mui/material";

const NewsList = (props: NewsListProps) => {
  const { isEnd, isLoading, localResult, handleLoadMore } = useNewsList(props);

  return (
    <>
      <ContainerSC>
        {localResult.map((item) => (
          <NewsCard key={item.slug} {...item} />
        ))}
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

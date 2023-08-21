import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import Error500 from "@/components/ErrorPage/Error500";

const Index = () => {
  return (
    <TitleLayout title="404">
      <Error500 />
    </TitleLayout>
  );
};

export default React.memo(Index);

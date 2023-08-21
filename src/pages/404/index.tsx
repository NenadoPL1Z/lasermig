import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import Error404 from "@/components/ErrorPage/Error404";

const Index = () => {
  return (
    <TitleLayout title="404">
      <Error404 />
    </TitleLayout>
  );
};

export default React.memo(Index);

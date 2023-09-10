import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import Error500 from "@/components/ErrorPage/Error500";

const Index = () => {
  return (
    <TitleLayout title="500">
      <div className="padding">
        <Error500 />
      </div>
    </TitleLayout>
  );
};

export default React.memo(Index);

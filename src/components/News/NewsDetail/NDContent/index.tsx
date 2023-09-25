import React, { useEffect, useRef } from "react";
import { NDContentProps } from "@/components/News/NewsDetail/types";
import { styles } from "@/components/News/NewsDetail/NDContent/index.styles";
import { BASE_URL } from "@/lib/constants";

const NDContent = ({ description }: NDContentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;

    if (!target) {
      return;
    }

    const images = target.querySelectorAll("img") || [];

    for (let i = 0; i < images.length; i++) {
      const img = images[i];

      const staticPath = img.src.replace(window.location.origin, "");
      const correctSrc = `${BASE_URL}${staticPath}`;

      img.src = correctSrc;
    }
  }, []);

  return (
    <ContainerSC
      ref={ref}
      className="container-two"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

const { ContainerSC } = styles;

export default React.memo(NDContent);

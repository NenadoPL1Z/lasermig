import { PDInfoProps } from "@/components/ProductDetail/types";

export const usePDInfo = ({
  advantages,
  product_characteristics,
  accessories,
  guarantees,
}: PDInfoProps) => {
  const isVisible =
    advantages || product_characteristics?.length || accessories || guarantees;

  const charsLength = product_characteristics.length;

  const isAdvantages = !!advantages;
  const isCharacteristics = !advantages && !!charsLength;
  const isAccessories = !advantages && !charsLength && !!accessories;
  const isGuarantees =
    !advantages && !charsLength && !accessories && !!guarantees;

  return {
    isVisible,
    isAdvantages,
    isCharacteristics,
    isAccessories,
    isGuarantees,
  };
};

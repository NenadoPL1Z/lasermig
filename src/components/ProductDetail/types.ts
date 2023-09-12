import { ProductDetailModel } from "@/lib/models/ProductDetailModel";
import { ChildrenProps } from "@/types/types";

export interface PDFirstProps
  extends Pick<ProductDetailModel, "tags" | "name"> {}

export interface PDInfoProps
  extends Pick<
    ProductDetailModel,
    "advantages" | "product_characteristics" | "accessories" | "guarantees"
  > {}

export interface PDInfoItemProps extends ChildrenProps {
  title: string;
  initialOpen?: boolean;
}

export interface PDPriceProps extends Pick<ProductDetailModel, "price"> {}

export interface PDSecondProps
  extends Pick<
    ProductDetailModel,
    "price" | "description" | "additional_title" | "additional_description"
  > {}

export interface PDSwiperProps
  extends Pick<ProductDetailModel, "product_images"> {}

export interface PDTopProps
  extends Omit<
    ProductDetailModel,
    "advantages" | "product_characteristics" | "accessories" | "guarantees"
  > {}

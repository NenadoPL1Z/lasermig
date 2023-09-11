import { ProductsArr } from "@/lib/models/ProductModel";

export interface ProductDetailCharacteristics {
  name: string;
  position: number;
  value: string;
}

export interface ProductDetailImage {
  image: string;
  position: number;
}

export type ProductDetailTags = string[];

export interface ProductDetailModel {
  id: number;
  slug: string;
  name: string;
  price: string;
  guarantees: string;
  description: string;
  category: string;
  advantages: string;
  additional_title: string;
  additional_description: string;
  accessories: string;
  product_characteristics: ProductDetailCharacteristics[];
  product_images: ProductDetailImage[];
  related_products: ProductsArr;
  tags: ProductDetailTags;
}

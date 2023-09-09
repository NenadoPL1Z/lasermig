export interface ProductImageModel {
  image: string;
  position: number;
}

export interface ProductModel {
  category: number;
  slug: string;
  name: string;
  short_description: string;
  product_images: ProductImageModel[];
}

export type ProductsArr = ProductModel[];

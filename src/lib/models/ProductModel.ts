export interface ProductImageModel {
  image: string;
  position: number;
}

export interface ProductModel {
  category: { name: string; slug: string };
  slug: string;
  name: string;
  price: string;
  short_description: string;
  tags: string[];
  product_images: ProductImageModel[];
}

export type ProductsArr = ProductModel[];

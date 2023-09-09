export interface NewsModel {
  title: string;
  slug: string;
  image: string;
  short_description: string;
  tags: string[];
}

export type NewsArr = NewsModel[];

import { NewsArr } from "@/lib/models/NewsModel";

export interface NewsDetailModel {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  image: string;
  description: string;
  related_news: NewsArr;
}

import { NewsDetailModel } from "@/lib/models/NewsDetailModel";
import { NewsArr } from "@/lib/models/NewsModel";

export interface NDTopProps
  extends Pick<NewsDetailModel, "title" | "tags" | "date" | "image" | "slug"> {}

export interface NDContentProps {
  description: string;
}

export interface NDRelatedProps {
  news: NewsArr;
}

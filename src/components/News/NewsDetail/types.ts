import { NewsDetailModel } from "@/lib/models/NewsDetailModel";

export interface NDTopInterface
  extends Pick<NewsDetailModel, "title" | "tags" | "date" | "image" | "slug"> {}

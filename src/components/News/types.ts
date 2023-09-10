import { NewsArr } from "@/lib/models/NewsModel";
import { PaginationResult } from "@/types/types";
import { TagsArr } from "@/lib/models/TagModel";

export interface NewsListProps extends PaginationResult<NewsArr> {
  tags: TagsArr;
}

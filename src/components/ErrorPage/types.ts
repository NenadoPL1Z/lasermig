import { ChildrenProps } from "@/types/types";

type ErrorImage = "404" | "500";

export interface ErrorPageProps extends Partial<ChildrenProps> {
  title: string;
  errorImage: ErrorImage;
}

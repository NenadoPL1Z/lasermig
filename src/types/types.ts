import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface PaginationResult<T> {
  count: number;
  next: string;
  prev: string;
  results: T;
}

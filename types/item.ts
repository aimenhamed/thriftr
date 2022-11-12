import { Category, Gender, Size } from "./preferences";

export enum Condition {
  NEW = "NEW",
  SIX_MONTHS = "SIX_MONTHS",
  ONE_YEAR = "ONE_YEAR",
  TWO_YEARS = "TWO_YEARS",
}

export interface Item {
  itemId: string;
  name: string;
  description: string;
  photos: any[];
  color: string;
  type: Category;
  size: Size;
  gender: Gender;
  condition: Condition;
}

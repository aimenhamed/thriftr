import { Category, Gender, Size } from "./preferences";

export enum Condition {
  NEW = "NEW",
  SIX_MONTHS = "6 MONTHS",
  ONE_YEAR = "1 YEAR",
  TWO_YEARS = "2 YEARS",
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

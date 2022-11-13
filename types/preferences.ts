export enum Category {
  SHIRTS = "SHIRTS",
  PANTS = "PANTS",
  SHOES = "SHOES",
  HOODIE = "HOODIE",
  HATS = "HATS",
  SWEATERS = "SWEATERS",
  JEWELLERY = "JEWELLERY",
  JACKETS = "JACKETS",
  SHORTS = "SHORTS",
  GLOVES = "GLOVES",
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  UNISEX = "UNISEX",
}

export enum Size {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  XLARGE = "XLARGE",
}

export interface Preferences {
  categories: Category[];
  sizes: Size[];
  genders: Gender[];
  colors: string[];
}

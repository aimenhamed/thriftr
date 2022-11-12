export enum Category {
  SHIRTS = "shirts",
  PANTS = "pants",
  SHOES = "shoes",
  HOODIE = "hoodie",
  HATS = "hats",
  SWEATERS = "sweaters",
  JEWELLERY = "jewellery",
  JACKETS = "jackets",
  SHORTS = "shorts",
  GLOVES = "gloves",
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
  categories?: Category[];
  sizes?: Size[];
  genders?: Gender[];
  colors?: string[];
}

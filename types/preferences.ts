export enum Category {
  SHIRTS = "Shirts",
  PANTS = "Pants",
  SHOES = "Shoes",
  HOODIE = "Hoodies",
  HATS = "Hats",
  SWEATERS = "Sweaters",
  JEWELLERY = "Jewellery",
  JACKETS = "Jackets",
  SHORTS = "Shorts",
  GLOVES = "Gloves",
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  UNISEX = "Unisex",
}

export enum Size {
  SMALL = "S",
  MEDIUM = "M",
  LARGE = "L",
  XLARGE = "XL",
}

export enum Colour {
  BLACK = "Black",
  BLUE = "Blue",
  BROWN = "Brown",
  GOLD = "Gold",
  GREEN = "Green",
  GREY = "Grey",
  MULTI = "Multi",
  NAVY = "Navy",
  NEUTRAL = "Neutral",
  ORANGE = "Orange",
  PINK = "Pink",
  PURPLE = "Purple",
  RED = "Red",
  WHITE = "White",
  YELLOW = "Yellow"
}

export interface Preferences {
  categories: Category[];
  sizes: Size[];
  genders: Gender[];
  colors: Colour[];
}

import { Condition } from "../../types/item";
import { Category, Gender, Size } from "../../types/preferences";
import { Profile } from "../../types/profile";

export const coolHoodieCollector = (): Profile => {
  const userId = "49b6a8f8-ca20-4e71-a4ec-73b705f476b3";

  return {
    userId,
    name: "coolhoodiecollector",
    phoneNumber: "0404555777",
    image: require("../images/users/49b6a8f8-ca20-4e71-a4ec-73b705f476b3.jpg"),
    items: [
      {
        itemId: "220daba3-4260-4764-92f6-97d82b013a57",
        name: "Japanese Embroidered Hoodie",
        description: "just bought and couldn't get a refund, happy to trade with anyone who loves a fancy embroidery. hoodie is made of premium cotton and has an adjustable drawstring hood.\n\nfront pouch pocket is a kangaroo, and has beautiful red embroidery designed by Japanese designers",
        photos: [
          require("../images/items/bac1fd90-6101-4de4-b9cf-1cbc856a12de.png"),
          require("../images/items/65f73402-6225-11ed-9b6a-0242ac120002.png"),
        ],
        color: "blue",
        type: Category.HOODIE,
        gender: Gender.MALE,
        size: Size.LARGE,
        condition: Condition.NEW,
      },
      {
        itemId: "ae8f6fdf-e8ad-4518-b299-e9faadd3c953",
        name: "Mickey Mouse Hoodie",
        description: "Light, soft and cool hoodie top.\n\nHas side pockets.\n\nPick up near Bexley or Post/Handling $12.\n\nThanks for looking. : )",
        photos: [
          require("../images/items/bc44ba46-ffb6-436c-9f47-893c8ee0d650.jpg"),
          require("../images/items/07167c9c-8cbd-46c1-9289-509be774341b.jpg"),
        ],
        color: "white",
        type: Category.HOODIE,
        gender: Gender.FEMALE,
        size: Size.MEDIUM,
        condition: Condition.SIX_MONTHS,
      },
    ],
    matches: [
      {
        userId,
        itemId: "220daba3-4260-4764-92f6-97d82b013a57",
        matchId: "74aa9a46-aff3-4ecc-a817-f6697b18eb74", // matched with aaron smith
        matchItemId: "4ed21f2a-dcb5-49be-a398-335704328fa1",
        chatId: "ef466674-51c6-4fe1-aee0-80360fd9f73a",
        blocked: false,
      },
    ],
    preferences: {
      categories: [Category.HOODIE, Category.JACKETS],
      sizes: [Size.LARGE],
      genders: [Gender.FEMALE, Gender.MALE, Gender.UNISEX],
      colors: [
        "blue",
        "red",
        "green",
        "yellow",
        "orange",
        "purple",
        "black",
        "white",
      ],
    },
  };
};

export const yepstyle = (): Profile => {
  const userId = "741e7fef-f550-44a9-b091-5913473934d8";

  return {
    userId,
    name: "yepstyle",
    phoneNumber: "0404234987",
    image: require("../images/users/741e7fef-f550-44a9-b091-5913473934d8.png"),
    items: [
      {
        itemId: "7c0877e9-c6c5-49b2-9b42-cbc7d8e22103",
        name: "Chuoko Print Shirt",
        description: "cute shirt that I bought online but doesn't fit me",
        photos: [
          require("../images/items/de5a423c-7d31-4355-89c0-b7053de66133.png"),
          require("../images/items/faa794a4-9ff0-426b-ad31-69421db6c176.png"),
          require("../images/items/614c7c5e-d204-4a84-86e0-02b696ba90f8.png"),
          require("../images/items/74f9316e-e2d5-4cb5-b898-f1e7206ddce4.png"),

        ],
        color: "beige",
        type: Category.SHIRTS,
        gender: Gender.UNISEX,
        size: Size.LARGE,
        condition: Condition.NEW,
      },
    ],
    matches: [],
    preferences: {
      categories: [Category.HOODIE, Category.JACKETS],
      sizes: [Size.LARGE],
      genders: [Gender.FEMALE, Gender.MALE, Gender.UNISEX],
      colors: [
        "blue",
        "red",
        "green",
        "yellow",
        "orange",
        "purple",
        "black",
        "white",
      ],
    },
  };
};

export const aaronSmith = (): Profile => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";

  return {
    userId,
    name: "aaronsmith",
    phoneNumber: "0404555444",
    image: require("../images/users/74aa9a46-aff3-4ecc-a817-f6697b18eb74.jpg"),
    items: [
      {
        itemId: "4ed21f2a-dcb5-49be-a398-335704328fa1",
        name: "Green Jacket",
        description: "A cool jacket for cool people",
        photos: [
          require("../images/items/d9f3c27c-a378-49ae-9589-7f91e0f41b59.png")
        ],
        color: "blue",
        type: Category.JACKETS,
        gender: Gender.MALE,
        size: Size.LARGE,
        condition: Condition.SIX_MONTHS,
      },
    ],
    matches: [
      {
        userId,
        itemId: "4ed21f2a-dcb5-49be-a398-335704328fa1",
        matchId: "49b6a8f8-ca20-4e71-a4ec-73b705f476b3", // matched with cool hoodie collector
        matchItemId: "220daba3-4260-4764-92f6-97d82b013a57",
        chatId: "ef466674-51c6-4fe1-aee0-80360fd9f73a",
        blocked: false,
      },
    ],
    preferences: {
      categories: [Category.HOODIE],
      sizes: [Size.LARGE],
      genders: [Gender.MALE],
      colors: ["blue", "red", "green", "yellow", "orange", "purple"],
    },
  };
};

export const profiles = [coolHoodieCollector(), aaronSmith(), yepstyle()];

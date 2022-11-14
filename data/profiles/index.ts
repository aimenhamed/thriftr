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
        description:
          "just bought and couldn't get a refund, happy to trade with anyone who loves a fancy embroidery. hoodie is made of premium cotton and has an adjustable drawstring hood.\n\nfront pouch pocket is a kangaroo, and has beautiful red embroidery designed by Japanese designers",
        photos: [
          require("../images/items/bac1fd90-6101-4de4-b9cf-1cbc856a12de.png"),
          require("../images/items/65f73402-6225-11ed-9b6a-0242ac120002.png"),
        ],
        color: "BLACK",
        type: Category.HOODIE,
        gender: Gender.MALE,
        size: Size.LARGE,
        condition: Condition.NEW,
      },
      {
        itemId: "ae8f6fdf-e8ad-4518-b299-e9faadd3c953",
        name: "Mickey Mouse Hoodie",
        description:
          "Light, soft and cool hoodie top.\n\nHas side pockets.\n\nPick up near Bexley or Post/Handling $12.\n\nThanks for looking. : )",
        photos: [
          require("../images/items/bc44ba46-ffb6-436c-9f47-893c8ee0d650.jpg"),
          require("../images/items/07167c9c-8cbd-46c1-9289-509be774341b.jpg"),
        ],
        color: "WHITE",
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
        matchItemId: "icon1111",
        chatId: "ef466674-51c6-4fe1-aee0-80360fd9f73a",
        blocked: false,
        newMatch: false,
        image: "../../assets/icon1111.png",
      },
    ],
    preferences: {
      categories: [Category.HOODIE, Category.JACKETS],
      sizes: [Size.LARGE],
      genders: [Gender.FEMALE, Gender.MALE, Gender.UNISEX],
      colors: [
        "BLUE",
        "RED",
        "GREEN",
        "YELLOW",
        "ORANGE",
        "PURPLE",
        "BLACK",
        "WHITE",
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
        color: "BEIGE",
        type: Category.SHIRTS,
        gender: Gender.UNISEX,
        size: Size.LARGE,
        condition: Condition.NEW,
      },
      {
        itemId: "a25d56d5-6168-45bd-87d6-b68ca8c5d432",
        name: "Bear Print Hoodie",
        description:
          "A hoodie is always a comfy addition to an outfit during chilly weather but what makes it even more fun? A print of a snuggly teddy bear! This drawcord hoodie features a minimal bear print and lettering for a cute touch while its ribbed hem and cuffs trap in heat. Available in light pink and blue.",
        photos: [
          require("../images/items/beebad68-d1bd-4658-b9c3-6da3f66e4def.png"),
          require("../images/items/97f2562e-d94d-4b95-b34c-9ff3f2881f3f.png"),
          require("../images/items/80b67f31-c475-4170-8a9c-21a509494dc8.png"),
        ],
        color: "BLUE",
        type: Category.HOODIE,
        gender: Gender.UNISEX,
        size: Size.LARGE,
        condition: Condition.ONE_YEAR,
      },
    ],
    matches: [],
    preferences: {
      categories: [Category.HOODIE, Category.JACKETS],
      sizes: [Size.LARGE],
      genders: [Gender.FEMALE, Gender.MALE, Gender.UNISEX],
      colors: [
        "BLUE",
        "RED",
        "GREEN",
        "YELLOW",
        "ORANGE",
        "PURPLE",
        "BLACK",
        "WHITE",
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
          require("../images/items/d9f3c27c-a378-49ae-9589-7f91e0f41b59.png"),
        ],
        color: "GREEN",
        type: Category.JACKETS,
        gender: Gender.MALE,
        size: Size.LARGE,
        condition: Condition.SIX_MONTHS,
      },
      {
        itemId: "d57bf492-7f53-4062-9d4c-30b74991e058",
        name: "Supreme Hoodie",
        description: "Authentic, like new",
        photos: [
          require("../images/items/c5ab49dd-7789-400e-825e-42d6a99df501.jpg"),
          require("../images/items/73d79a65-063d-4129-8ce1-4900d2cdf262.jpg"),
        ],
        color: "WHITE",
        type: Category.HOODIE,
        gender: Gender.MALE,
        size: Size.LARGE,
        condition: Condition.NEW,
      },
      {
        itemId: "7124ea76-6a1e-40dc-9e51-41ee09aa5f24",
        name: "Purple Kathmandu down jacket",
        description:
          "Womens size 12 purple Kathmandu down jacket. The bottom of the zipper is worn but works. Condition as per picture.",
        photos: [
          require("../images/items/15bc95ef-52f5-418c-ade2-ce203c315cc9.jpg"),
          require("../images/items/0e4744e1-8e1c-4f83-a21a-804e01f864de.jpg"),
          require("../images/items/ecdfa90d-f62f-4240-ae3b-7aecbcdb699f.jpg"),
          require("../images/items/9cfd48eb-fba9-4405-b3bb-29db4cbb4e04.jpg"),
        ],
        color: "BLACK",
        type: Category.JACKETS,
        gender: Gender.FEMALE,
        size: Size.LARGE,
        condition: Condition.TWO_YEARS,
      },
    ],
    matches: [
      {
        userId,
        itemId: "4ed21f2a-dcb5-49be-a398-335704328fa1",
        matchId: "49b6a8f8-ca20-4e71-a4ec-73b705f476b3", // matched with cool hoodie collector
        matchItemId: "icon1111",
        chatId: "ef466674-51c6-4fe1-aee0-80360fd9f73a",
        blocked: false,
        newMatch: false,
        image: "../../assets/icon1111.png",
      },
    ],
    preferences: {
      categories: [Category.HOODIE],
      sizes: [Size.LARGE],
      genders: [Gender.MALE],
      colors: ["BLUE", "RED", "GREEN", "YELLOW", "ORANGE", "PURPLE"],
    },
  };
};

export const profiles = [coolHoodieCollector(), aaronSmith(), yepstyle()];

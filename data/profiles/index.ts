import { Condition } from "../../types/item";
import { Category, Gender, Size } from "../../types/preferences";
import { Profile } from "../../types/profile";

export const coolHoodieCollector = (): Profile => {
  const userId = "49b6a8f8-ca20-4e71-a4ec-73b705f476b3";
  const itemId = "220daba3-4260-4764-92f6-97d82b013a57";

  return {
    userId,
    name: "coolhoodiecollector",
    phoneNumber: "0404555777",
    image: "",
    items: [
      {
        itemId,
        name: "Cool Hoodie",
        description: "A cool hoodie for cool people",
        photos: [""],
        color: "blue",
        type: Category.HOODIE,
        gender: Gender.MALE,
        size: Size.LARGE,
        condition: Condition.NEW,
      },
    ],
    matches: [
      {
        userId,
        itemId,
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

export const aaronSmith = (): Profile => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  const itemId = "4ed21f2a-dcb5-49be-a398-335704328fa1";

  return {
    userId,
    name: "aaronsmith",
    phoneNumber: "0404555444",
    image: "",
    items: [
      {
        itemId,
        name: "Green Jacket",
        description: "A cool jacket for cool people",
        photos: [""],
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
        itemId,
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

export const profiles = [coolHoodieCollector(), aaronSmith()];

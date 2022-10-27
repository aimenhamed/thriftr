import { Item } from "./item";
import { Match } from "./match";
import { Preferences } from "./preferences";

export interface Profile {
  userId: string;
  name: string;
  phoneNumber: string;
  image: string;
  items: Item[];
  matches: Match[];
  preferences: Preferences;
}

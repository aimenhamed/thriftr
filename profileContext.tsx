import React from "react";
import { Profile } from "./types/profile";

export interface ProfileContext {
  profile: Profile;
  setCurrentProfile: (currentProfile: Profile) => void;
}

export const profileContext = React.createContext<ProfileContext>({
  profile: {
    userId: "74aa9a46-aff3-4ecc-a817-f6697b18eb74",
    name: "itsViggo",
    image: require("./assets/test.png"),
    items: [],
    matches: [],
    preferences: {},
  },
  setCurrentProfile: () => {},
});

export const useProfile = (): ProfileContext => {
  const [profile, setProfile] = React.useState({
    userId: "74aa9a46-aff3-4ecc-a817-f6697b18eb74",
    name: "itsViggo",
    image: require("./assets/test.png"),
    items: [],
    matches: [],
    preferences: {},
  } as Profile);

  const setCurrentProfile = React.useCallback(
    (currentProfile: Profile): void => {
      setProfile(currentProfile);
    },
    []
  );

  return {
    profile,
    setCurrentProfile,
  };
};

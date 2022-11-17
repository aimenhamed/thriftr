import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  useWindowDimensions,
} from "react-native";
import { Backend } from "../backend";
import { profileContext } from "../profileContext";
import { Profile } from "../types/profile";

type AccountScreenProps = {
  profileId: string;
};

export default function (props: AccountScreenProps) {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();
  const { profile: profileUpdate } = useContext(profileContext);
  const profile = Backend.getProfile(props.profileId);
  const currentUser = props.profileId === Backend.getCurrentUserId();

  return (
    <View>
      <View style={{ padding: 25 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Image
            source={profileUpdate && profile && profile.image}
            style={{
              width: width / 4,
              height: width / 4,
              borderRadius: width / 8,
            }}
          />
          {currentUser && (
            <Pressable
              style={{
                width: width / 4,
                height: width / 4,
                backgroundColor: "#FFE600",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                Backend.setCurrentItemId(undefined);
                navigation.navigate("modal");
              }}
            >
              <Image
                style={{ width: "50%", height: "50%" }}
                source={require("../assets/plus.png")}
              />
              <Text
                style={{
                  fontFamily: "AzeretMono_400Regular",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                Add Listing
              </Text>
            </Pressable>
          )}
        </View>
        <Text
          style={{
            fontFamily: "AzeretMono_400Regular",
            fontSize: 14,
            color: "white",
            marginTop: 2,
          }}
        >
          {"@" + (profileUpdate && profile && profile.name)}
        </Text>
        {currentUser && (
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 22,
              width: "100%",
              backgroundColor: "white",
              marginTop: 2,
            }}
            onPress={() => {
              navigation.navigate("EditProfilePage");
            }}
          >
            <Text style={{ fontFamily: "AzeretMono_400Regular", fontSize: 14 }}>
              Edit Profile
            </Text>
          </Pressable>
        )}
      </View>
      <View style={{ flexDirection: "row", flexWrap: 'wrap'}}>
        {profileUpdate && profile && profile.items.map((item, i) => (
          <Pressable
            onPress={() => {
              if (currentUser) {
                Backend.setCurrentItemId(item.itemId);
                navigation.navigate("modal");
              }
            }}
          >
            <Image
              key={i}
              source={item.photos[0]}
              style={{ width: width / 3, height: width / 3 }}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

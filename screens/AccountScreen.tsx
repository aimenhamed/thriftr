import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  useWindowDimensions,
} from "react-native";
import { profileContext } from "../profileContext";
import { Profile } from "../types/profile";

type AccountScreenProps = {
  currentUser: Boolean;
  profile: Profile;
};

export default function (props: AccountScreenProps) {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();
  const { setCurrentItem } = useContext(profileContext);

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
            source={props.profile.image}
            style={{
              width: width / 4,
              height: width / 4,
              borderRadius: width / 8,
            }}
          />
          {props.currentUser && (
            <Pressable
              style={{
                width: width / 4,
                height: width / 4,
                backgroundColor: "#FFE600",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("modal");
                setCurrentItem(undefined);
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
          {"@" + props.profile.name}
        </Text>
        {props.currentUser && (
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
      <View style={{ flexDirection: "row" }}>
        {props.profile.items.map((item, i) => (
          <Pressable
            onPress={() => {
              if (props.currentUser) {
                navigation.navigate("modal");
                setCurrentItem(item.itemId);
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

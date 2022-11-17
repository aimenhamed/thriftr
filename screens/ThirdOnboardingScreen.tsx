import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { styles } from "./ThirdOnboardingScreen.style";
import WhitePlus from "../assets/WhitePlus";
import { useNavigation } from "@react-navigation/native";
import { profileContext } from "../profileContext";
import WhiteBackArrow from "../assets/WhiteBackArrow";
import { LoginProps } from "../Router";
import { Backend } from "../backend";

const ThirdOnboardingScreen = () => {
  const navigation = useNavigation<LoginProps["navigation"]>();
  const { width } = useWindowDimensions();
  const profile = Backend.getProfile(Backend.getCurrentUserId());
  const { profile: profileUpdate } = useContext(profileContext);

  return (
    <View style={styles.background}>
      <TouchableOpacity
        style={styles.backarrow}
        onPress={() => navigation.navigate("SecondOnboardingScreen")}
      >
        <WhiteBackArrow/>
      </TouchableOpacity>

      <View style={[styles.viewport, { justifyContent: "flex-start" }]}>
        <Text
          style={[
            styles.normalText,
            { fontSize: 16 },
            { paddingLeft: 13 },
            { paddingTop: 100 },
          ]}
        >
          What items do you want to list for trade?
        </Text>
      </View>

      <View
        style={[
          { paddingLeft: 40 },
          { paddingRight: 40 },
          { display: "flex" },
          { flex: 40 },
        ]}
      >
        <View
          style={[
            { flexDirection: "row" },
            { justifyContent: "space-between" },
            { flexWrap: "wrap" },
            { flex: 1 },
          ]}
        >
          {profileUpdate && profile?.items.map((item, i) => (
            <Pressable
              onPress={() => {
                Backend.setCurrentItemId(item.itemId);
                navigation.navigate("modal");
              }}
            >
              <Image
                key={i}
                source={item.photos[0]}
                style={[
                  { width: 0.4 * (width - 50) },
                  { height: 0.4 * (width - 50) },
                  { borderColor: "white" },
                  { borderWidth: 1 },
                  { marginBottom: 30 },
                ]}
              />
            </Pressable>
          ))}
          <TouchableOpacity
            style={[
              styles.addButton,
              { width: 0.4 * (width - 50) },
              { height: 0.4 * (width - 50) },
            ]}
            onPress={() => {
              Backend.setCurrentItemId(undefined);
              navigation.navigate("modal");
            }}
          >
            <WhitePlus />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.viewport, { alignItems: "center" }, { flex: 25 }]}>
        <Text style={[styles.normalText, { marginTop: -50 }]}>
          You can change this later
        </Text>
        <Text style={styles.normalText}>through your profile</Text>
        <TouchableOpacity
          style={[
            styles.submitButton,
            {
              backgroundColor:
                profile.items.length == 0 ? "#575117" : "#FFE600",
            },
            { marginTop: 30 },
          ]}
          disabled={profile.items.length == 0 ? true : false}
          onPress={() => navigation.navigate("main")}
        >
          <Text style={styles.buttonText}>Start Thrifting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThirdOnboardingScreen;

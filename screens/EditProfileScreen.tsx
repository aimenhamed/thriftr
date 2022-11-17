import React, { useContext, useState } from "react";
import { styles } from "./Matches.style";
import {
  Pressable,
  View,
  Image,
  Text,
  useWindowDimensions,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { profileContext } from "../profileContext";
import { Category, Colour, Gender, Size } from "../types/preferences";
import { Backend } from "../backend";

export default function () {
  const navigation = useNavigation();
  const profile = Backend.getProfile(Backend.getCurrentUserId());
  const { setCurrentProfile } = useContext(profileContext);
  const [image, setImage] = useState(profile.image);
  const [phone, setPhone] = useState(profile.phoneNumber);
  const [name, setName] = useState(profile.name);
  const [categoryPreferences, setCategoryPreferences] = useState(
    profile.preferences.categories
  );
  const [sizePreferences, setSizePreferences] = useState(
    profile.preferences.sizes
  );
  const [genderPreferences, setGenderPreferences] = useState(
    profile.preferences.genders
  );
  const [colourPreferences, setColourPreferences] = useState(
    profile.preferences.colors
  );
  const [editProfileScreen, setEditProfileScreen] = useState(true);
  const [pickCategoryScreen, setPickCategoryScreen] = useState(false);
  const [pickColourScreen, setPickColourScreen] = useState(false);
  const [pickSizeScreen, setPickSizeScreen] = useState(false);
  const [pickGenderScreen, setPickGenderScreen] = useState(false);

  const { height, width } = useWindowDimensions();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage({ uri: result.uri });
    }
  };

  return (
    <View style={{ ...styles.container, padding: 25, display: "flex" }}>
      {editProfileScreen && (
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Pressable onPress={() => navigation.goBack()} style={{ margin: 15 }}>
            <Image
              source={require("../assets/x.png")}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
          <Pressable onPress={() => {
            navigation.navigate('LoginScreen');
            Backend.deleteProfile(Backend.getCurrentUserId());
          }}>
              <Text
                style={{
                  fontFamily: "AzeretMono_400Regular",
                  color: "#FF0000",
                }}
              >
                Delete account
              </Text>
            </Pressable>
          </View>
          <View style={{ alignItems: "center" }}>
            {image && (
              <Image
                source={image}
                style={{
                  width: width / 4,
                  height: width / 4,
                  borderRadius: width / 8,
                }}
              />
            )}
            <Pressable onPress={pickImage}>
              <Text
                style={{
                  fontFamily: "AzeretMono_400Regular",
                  color: "#FFE600",
                }}
              >
                Change Profile Photo
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginRight: 24,
                marginTop: 6,
                fontFamily: "AzeretMono_400Regular",
                color: "#AAAAAA",
              }}
            >
              Phone
            </Text>
            <TextInput
              style={{
                height: 30,
                fontFamily: "AzeretMono_400Regular",
                borderBottomWidth: 1,
                color: "white",
                borderColor: "white",
                width: "80%",
              }}
              value={phone}
              onChangeText={(newText) => setPhone(newText)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginRight: 24,
                marginTop: 6,
                fontFamily: "AzeretMono_400Regular",
                color: "#AAAAAA",
              }}
            >
              Name
            </Text>
            <TextInput
              style={{
                height: 30,
                fontFamily: "AzeretMono_400Regular",
                borderBottomWidth: 1,
                color: "white",
                borderColor: "white",
                width: "80%",
              }}
              value={name}
              onChangeText={(newText) => setName(newText)}
            />
          </View>
          <Text
            style={{
              marginTop: 24,
              fontFamily: "AzeretMono_400Regular",
              color: "white",
            }}
          >
            Preferences
          </Text>
          <Pressable
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              height: 38,
              marginTop: 24,
            }}
            onPress={() => {
              setEditProfileScreen(false);
              setPickCategoryScreen(true);
            }}
          >
            <Text
              style={{
                fontFamily: "AzeretMono_400Regular",
              }}
            >
              Category
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              height: 38,
              marginTop: 24,
            }}
            onPress={() => {
              setEditProfileScreen(false);
              setPickColourScreen(true);
            }}
          >
            <Text
              style={{
                fontFamily: "AzeretMono_400Regular",
              }}
            >
              Colour
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              height: 38,
              marginTop: 24,
            }}
            onPress={() => {
              setEditProfileScreen(false);
              setPickSizeScreen(true);
            }}
          >
            <Text
              style={{
                fontFamily: "AzeretMono_400Regular",
              }}
            >
              Size
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              height: 38,
              marginTop: 24,
            }}
            onPress={() => {
              setEditProfileScreen(false);
              setPickGenderScreen(true);
            }}
          >
            <Text
              style={{
                fontFamily: "AzeretMono_400Regular",
              }}
            >
              Gender
            </Text>
          </Pressable>
          <View style={{
            alignItems: 'center',
          }}>
          <Pressable
            style={{
              backgroundColor: "#FFE600",
              alignItems: "center",
              justifyContent: "center",
              height: 38,
              marginTop: 24,
              width: '50%',
              opacity: !name ? 0.2 : 1
            }}
            onPress={() => {
              Backend.updateProfile({
                userId: profile.userId,
                name: name,
                image: image,
                items: profile.items,
                matches: profile.matches,
                preferences: {
                  categories: categoryPreferences,
                  colors: colourPreferences,
                  sizes: sizePreferences,
                  genders: genderPreferences,
                },
                phoneNumber: phone,
              })
              setCurrentProfile({
                userId: profile.userId,
                name: name,
                image: image,
                items: profile.items,
                matches: profile.matches,
                preferences: {
                  categories: categoryPreferences,
                  colors: colourPreferences,
                  sizes: sizePreferences,
                  genders: genderPreferences,
                },
                phoneNumber: phone,
              })
              navigation.goBack();
            }}
            disabled={!name}
          >
            <Text
              style={{
                fontFamily: "AzeretMono_400Regular",
              }}
            >
              Finish Editing
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('LoginScreen')} style={{marginTop: 24}}>
              <Text
                style={{
                  fontFamily: "AzeretMono_400Regular",
                  color: "#FFE600",
                }}
              >
                Log out
              </Text>
            </Pressable>
          </View>
        </View>
      )}
      {pickCategoryScreen && (
        <View>
          <Pressable
            onPress={() => {
              setEditProfileScreen(true);
              setPickCategoryScreen(false);
            }}
            style={{ margin: 15 }}
          >
            <Image
              source={require("../assets/x.png")}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Object.values(Category).map((value, i) => (
              <Pressable
                key={i}
                style={{
                  width: "40%",
                  backgroundColor: categoryPreferences.find((i) => i === value)
                    ? "#FFE600"
                    : "white",
                  margin: 12,
                  height: 38,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() =>
                  categoryPreferences.find((i) => i === value)
                    ? setCategoryPreferences((current) =>
                        current.filter((category) => category !== value)
                      )
                    : setCategoryPreferences([...categoryPreferences, value])
                }
              >
                <Text
                  style={{
                    fontFamily: "AzeretMono_400Regular",
                  }}
                >
                  {value}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
      {pickColourScreen && (
        <View>
          <Pressable
            onPress={() => {
              setEditProfileScreen(true);
              setPickColourScreen(false);
            }}
            style={{ margin: 15 }}
          >
            <Image
              source={require("../assets/x.png")}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Object.values(Colour).map((value, i) => (
              <Pressable
                key={i}
                style={{
                  width: "40%",
                  backgroundColor: colourPreferences.find((i) => i === value)
                    ? "#FFE600"
                    : "white",
                  margin: 12,
                  height: 38,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() =>
                  colourPreferences.find((i) => i === value)
                    ? setColourPreferences((current) =>
                        current.filter((colour) => colour !== value)
                      )
                    : setColourPreferences([...colourPreferences, value])
                }
              >
                <Text
                  style={{
                    fontFamily: "AzeretMono_400Regular",
                  }}
                >
                  {value}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
      {pickSizeScreen && (
        <View>
          <Pressable
            onPress={() => {
              setEditProfileScreen(true);
              setPickSizeScreen(false);
            }}
            style={{ margin: 15 }}
          >
            <Image
              source={require("../assets/x.png")}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Object.values(Size).map((value, i) => (
              <Pressable
                key={i}
                style={{
                  width: "40%",
                  backgroundColor: sizePreferences.find((i) => i === value)
                    ? "#FFE600"
                    : "white",
                  margin: 12,
                  height: 38,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() =>
                  sizePreferences.find((i) => i === value)
                    ? setSizePreferences((current) =>
                        current.filter((size) => size !== value)
                      )
                    : setSizePreferences([...sizePreferences, value])
                }
              >
                <Text
                  style={{
                    fontFamily: "AzeretMono_400Regular",
                  }}
                >
                  {value}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
      {pickGenderScreen && (
        <View>
          <Pressable
            onPress={() => {
              setEditProfileScreen(true);
              setPickGenderScreen(false);
            }}
            style={{ margin: 15 }}
          >
            <Image
              source={require("../assets/x.png")}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Object.values(Gender).map((value, i) => (
              <Pressable
                key={i}
                style={{
                  width: "40%",
                  backgroundColor: genderPreferences.find((i) => i === value)
                    ? "#FFE600"
                    : "white",
                  margin: 12,
                  height: 38,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() =>
                  genderPreferences.find((i) => i === value)
                    ? setGenderPreferences((current) =>
                        current.filter((gender) => gender !== value)
                      )
                    : setGenderPreferences([...genderPreferences, value])
                }
              >
                <Text
                  style={{
                    fontFamily: "AzeretMono_400Regular",
                  }}
                >
                  {value}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

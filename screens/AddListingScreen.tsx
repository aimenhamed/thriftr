import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  View,
  Pressable,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Button,
  useWindowDimensions,
  ImageSourcePropType,
} from "react-native";
import { styles } from "./Matches.style";
import Dropdown from "../components/Dropdown";
import { useCallback } from "react";
import * as ImagePicker from "expo-image-picker";
import { profileContext } from "../profileContext";
import { Category, Gender, Size } from "../types/preferences";
import { Condition } from "../types/item";

export default function () {
  const navigation = useNavigation();
  const [sizeItemsOpen, setSizeItemsOpen] = React.useState(false);
  const [colourItemsOpen, setColourItemsOpen] = React.useState(false);
  const [categoryItemsOpen, setCategoryItemsOpen] = React.useState(false);

  const { height, width } = useWindowDimensions();

  const onSizeItemsOpen = useCallback(() => {
    setColourItemsOpen(false), setCategoryItemsOpen(false), Keyboard.dismiss();
  }, []);

  const onColourItemsOpen = useCallback(() => {
    setCategoryItemsOpen(false), setSizeItemsOpen(false), Keyboard.dismiss();
  }, []);

  const onCategoryItemsOpen = useCallback(() => {
    setSizeItemsOpen(false), setColourItemsOpen(false), Keyboard.dismiss();
  }, []);

  const sizeItems = [
    { label: "S", value: Size.SMALL },
    { label: "M", value: Size.MEDIUM },
    { label: "L", value: Size.LARGE },
    { label: "XL", value: Size.XLARGE },
  ];
  const colourItems = [
    { label: "Black", value: "Black" },
    { label: "Blue", value: "Blue" },
    { label: "Brown", value: "Brown" },
    { label: "Gold", value: "Gold" },
    { label: "Green", value: "Green" },
    { label: "Grey", value: "Grey" },
    { label: "Multi", value: "Multi" },
    { label: "Navy", value: "Navy" },
    { label: "Neutral", value: "Neutral" },
    { label: "Orange", value: "Orange" },
    { label: "Pink", value: "Pink" },
    { label: "Purple", value: "Purple" },
    { label: "Red", value: "Red" },
    { label: "White", value: "White" },
    { label: "Yellow", value: "Yellow" },
  ];
  const categoryItems = [
    { label: "Shirts", value: Category.SHIRTS },
    { label: "Pants", value: Category.PANTS },
    { label: "Shoes", value: Category.SHOES },
    { label: "Hoodies", value: Category.HOODIE },
    { label: "Hats", value: Category.HATS },
    { label: "Sweaters", value: Category.SWEATERS },
    { label: "Jewellery", value: Category.JEWELLERY },
    { label: "Jackets", value: Category.JACKETS },
    { label: "Shorts", value: Category.SHORTS },
    { label: "Gloves", value: Category.GLOVES },
  ];

  const [images, setImages] = React.useState([] as Array<ImageSourcePropType>);
  const [name, setName] = React.useState(undefined as string | undefined);
  const [colour, setColour] = React.useState(undefined as string | undefined);
  const [size, setSize] = React.useState(undefined as Size | undefined);
  const [category, setCategory] = React.useState(
    undefined as Category | undefined
  );
  const [description, setDescription] = React.useState(
    undefined as String | undefined
  );

  const { profile, setCurrentProfile } = useContext(profileContext);

  console.log(profile);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages([...images, { uri: result.uri }]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSizeItemsOpen(false);
        setColourItemsOpen(false);
        setCategoryItemsOpen(false);
        Keyboard.dismiss();
      }}
    >
      <View style={{ ...styles.container, padding: 40, display: "flex" }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/x.png")}
            style={{ width: 24, height: 24 }}
          />
        </Pressable>
        <TextInput
          style={{
            height: 30,
            marginTop: 30,
            fontSize: 14,
            fontFamily: "AzeretMono_400Regular",
            borderBottomWidth: 1,
            color: "white",
            borderColor: "white",
          }}
          onChangeText={(newText) => setName(newText)}
          onFocus={() => {
            setSizeItemsOpen(false);
            setColourItemsOpen(false);
            setCategoryItemsOpen(false);
          }}
          placeholder="Item name"
          placeholderTextColor="#AAAAAA"
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Dropdown
            items={sizeItems}
            placeholder="Size"
            width="24%"
            onOpen={onSizeItemsOpen}
            setOpen={setSizeItemsOpen}
            open={sizeItemsOpen}
            value={size}
            setValue={setSize}
          />
          <Dropdown
            items={colourItems}
            placeholder="Colour"
            width="32%"
            onOpen={onColourItemsOpen}
            setOpen={setColourItemsOpen}
            open={colourItemsOpen}
            value={colour}
            setValue={setColour}
          />
          <Dropdown
            items={categoryItems}
            placeholder="Category"
            width="38%"
            onOpen={onCategoryItemsOpen}
            setOpen={setCategoryItemsOpen}
            open={categoryItemsOpen}
            value={category}
            setValue={setCategory}
          />
        </View>
        <Text
          style={{
            marginTop: 30,
            marginBottom: 10,
            fontFamily: "AzeretMono_400Regular",
            color: "white",
          }}
        >
          Description
        </Text>
        <TextInput
          style={{
            height: 90,
            fontSize: 14,
            fontFamily: "AzeretMono_400Regular",
            borderWidth: 1,
            color: "white",
            borderColor: "white",
            textAlignVertical: "top",
          }}
          onFocus={() => {
            setSizeItemsOpen(false);
            setColourItemsOpen(false);
            setCategoryItemsOpen(false);
          }}
          placeholderTextColor="#AAAAAA"
          multiline={true}
        />
        <Text
          style={{
            marginTop: 30,
            marginBottom: 10,
            fontFamily: "AzeretMono_400Regular",
            color: "white",
          }}
        >
          Photos
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {images.map((uri, i) => (
            <Image
              source={uri}
              key={i}
              style={{
                width: 0.4 * (width - 50),
                height: 0.4 * (width - 50),
                borderColor: "white",
                borderWidth: 1,
                marginBottom: 30,
              }}
            />
          ))}
          {images.length < 4 && (
            <Pressable
              onPress={pickImage}
              style={{
                width: 0.4 * (width - 50),
                height: 0.4 * (width - 50),
                borderColor: "white",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <Image
                source={require("../assets/whitePlus.png")}
                style={{ width: "40%", height: "40%" }}
              />
            </Pressable>
          )}
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              width: 200,
              height: 40,
              backgroundColor: "#FFE600",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.goBack();
              setCurrentProfile({
                userId: profile.userId,
                name: profile.name,
                image: profile.image,
                items: [
                  ...profile.items,
                  {
                    itemId: "0",
                    name: "",
                    description: "",
                    color: colour ?? "",
                    type: category ?? Category.GLOVES,
                    size: size ?? Size.LARGE,
                    photos: images,
                    gender: Gender.FEMALE,
                    condition: Condition.NEW,
                  },
                ],
                matches: profile.matches,
                preferences: profile.preferences,
              });
              console.log({
                userId: profile.userId,
                name: profile.name,
                image: profile.image,
                items: [
                  ...profile.items,
                  {
                    itemId: "0",
                    name: "",
                    description: "",
                    color: colour ?? "",
                    type: category ?? Category.GLOVES,
                    size: size ?? Size.LARGE,
                    photos: images,
                    gender: Gender.FEMALE,
                    condition: Condition.NEW,
                  },
                ],
                matches: profile.matches,
                preferences: profile.preferences,
              });
            }}
          >
            <Text
              style={{
                fontFamily: "AzeretMono_400Regular",
              }}
            >
              Add Listing
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

import React, { useContext, useState } from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Backend } from "../backend";
import ItemCard from "../components/ItemCard";
import { profileContext } from "../profileContext";
import { PageProps } from "../Router";
import { Item } from "../types/item";
import { styles } from "./Thrifting.style";
import IgnoreIcon from "../assets/IgnoreIcon";
import LikeIcon from "../assets/LikeIcon";
import OfferIcon from "../assets/OfferIcon";

export default function ({navigation, route}: PageProps) {
  const { profileId } = route.params;
  const { height, width } = useWindowDimensions();
  const { profile: profileUpdate } = useContext(profileContext);
  const [accountScreen, setAccountScreen] = useState(true);
  const [item, setItem] = useState(undefined as Item | undefined);
  const profile = Backend.getProfile(profileId);
  const currentUser = profileId === Backend.getCurrentUserId();

  return (
    <ScrollView style={{backgroundColor: '#1F1F1F'}}>
      { accountScreen ? <View>
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
            key={i}
            onPress={() => {
              if (currentUser) {
                Backend.setCurrentItemId(item.itemId);
                navigation.navigate("modal");
              } else {
                setAccountScreen(false);
                setItem(item)
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
      </View> : <View style={{ 
    height: height - 148,
    width: width - 48,
    backgroundColor: "#FFE600", alignSelf: 'center', marginTop: 24, marginBottom: 24}}>
            {item && profile && <ItemCard item={item} seller={{name: profile?.name, image: profile?.image}}/>}
            <View style={styles.userActions}>
        <TouchableOpacity
          style={styles.userAction}
          onPress={() => setAccountScreen(true)}
        >
          <IgnoreIcon />
          <Text style={styles.userActionText}>Ignore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userAction}
          onPress={() => setAccountScreen(true)}>
          <OfferIcon />
          <Text style={styles.userActionText}>Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userAction}
          onPress={() => setAccountScreen(true)}
        >
          <LikeIcon />
          <Text style={styles.userActionText}>Like</Text>
        </TouchableOpacity>
      </View>
        </View>}
    </ScrollView>
  );
}

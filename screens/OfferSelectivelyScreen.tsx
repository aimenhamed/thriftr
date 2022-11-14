import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  DeviceEventEmitter,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PageProps } from "../Router";
import { Item } from "../types/item";
import { profiles } from "../data/profiles";
import { styles } from "./OfferSelectively.style";
import CloseIcon from "../assets/CloseIcon";
import Selected from "../assets/Selected";
import { useState } from "react";

export type OfferSelectivelyScreenProps = {
  route: {
    params: {
      userId: string;
      itemMatched: Item;
      sellerMatched: {
        name: string;
        image: any;
      };
      swipedCardIndex: number;
    };
  };
} & PageProps;

const getUsersItems = (userId: string) => {
  const userProfile = profiles.find((profile) => profile.userId === userId);
  return userProfile?.items;
};

const OfferSelectivelyScreen = ({
  navigation,
  route: {
    params: { swipedCardIndex, userId, itemMatched, sellerMatched },
  },
}: OfferSelectivelyScreenProps) => {
  const usersItems = getUsersItems(userId);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const onOfferButtonPress = () => {
    navigation.navigate("ThriftingScreen");
    DeviceEventEmitter.emit("finishOfferSelectively", {
      swipedCardIndex,
      selectedItems,
    });
    DeviceEventEmitter.removeAllListeners("finishOfferSelectively");
  };

  const onBackButtonPress = () => {
    navigation.goBack();
    DeviceEventEmitter.emit("cancelOfferSelectively", {
      startingIndex: swipedCardIndex,
    });
    DeviceEventEmitter.removeAllListeners("cancelOfferSelectively");
  };

  const handleSelect = (itemId: string) => {
    const idx = selectedItems.indexOf(itemId);

    if (idx > -1) {
      // Item is currently selected.
      const newSelectedItems = [...selectedItems];
      newSelectedItems.splice(idx, 1);
      setSelectedItems(newSelectedItems);
    } else {
      // Item is not currently selected.
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={itemMatched.photos[0]}
        resizeMode="cover"
        style={styles.background}
      >
        <LinearGradient
          colors={["#1F1F1FB0", "#1F1F1FFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.5 }}
          style={styles.dimmer}
        >
          <TouchableOpacity
            onPress={onBackButtonPress}
            style={styles.closeIcon}
          >
            <CloseIcon />
          </TouchableOpacity>
          <Text style={styles.caption}>
            Select items that you'd like to trade for @{sellerMatched.name}'s{" "}
            <Text style={styles.boldCaption}>{itemMatched.name}</Text>
          </Text>
          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            style={styles.itemSelector}
          >
            {usersItems?.map((item) => (
              <TouchableOpacity
                key={item.itemId}
                style={styles.itemPhotoButton}
                onPress={() => handleSelect(item.itemId)}
              >
                <ImageBackground source={item.photos[0]}>
                  {selectedItems.includes(item.itemId) ? (
                    <View style={styles.itemPhotoDimmer}>
                      <Selected style={styles.selectedIcon} />
                    </View>
                  ) : (
                    <View style={styles.itemPhoto} />
                  )}
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={
              selectedItems.length === 0
                ? styles.disabledOfferButton
                : styles.offerButton
            }
            onPress={onOfferButtonPress}
            disabled={selectedItems.length === 0}
          >
            <Text style={styles.offerButtonText}>Offer selected items</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default OfferSelectivelyScreen;

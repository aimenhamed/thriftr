import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ItsA from "../assets/ItsA";
import Match from "../assets/Match";
import { PageProps } from "../Router";
import { Item } from "../types/item";
import { styles } from "./ItsAMatch.style";
import ExchangeArrows from "../assets/ExchangeArrows";
import Bag from "../assets/Bag";
import MessagesOutline from "../assets/MessagesFilled";
import { profiles } from "../data/profiles";

const FallbackImage = require("../data/images/items/d9f3c27c-a378-49ae-9589-7f91e0f41b59.png");

export type ItsAMatchScreenProps = {
  route: {
    params: {
      userId: string;
      itemMatched: Item;
      sellerMatched: {
        name: string;
        image: any;
      };
    };
  };
} & PageProps;

const getUsersMatchedItem = (userId: string, receivingItemId: string) => {
  const userProfile = profiles.find((profile) => profile.userId === userId);
  const match = userProfile?.matches.find(
    (match) => match.matchItemId === receivingItemId
  );
  const usersMatchedItemId = match?.itemId;
  return userProfile?.items.find((item) => item.itemId === usersMatchedItemId) ?? userProfile?.items[0];
};

const getUsersProfilePicture = (userId: string) => {
  return profiles.find((profile) => profile.userId === userId)?.image;
};

const ItsAMatchScreen = ({
  navigation,
  route: {
    params: { userId, itemMatched, sellerMatched },
  },
}: ItsAMatchScreenProps) => {
  const usersGivingItem = getUsersMatchedItem(userId, itemMatched.itemId);

  const onSendMessagePress = () => {
    navigation.navigate("Matches");
  };

  const onKeepThriftingPress = () => {
    navigation.goBack();
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
          <View style={styles.itsAMatch}>
            <ItsA />
            <Match />
          </View>
          <View style={styles.swapDiagram}>
            <View style={styles.userAndItem}>
              <Image
                source={usersGivingItem?.photos[0] ?? FallbackImage }
                style={styles.itemImage}
              />
              <Image
                source={getUsersProfilePicture(userId)}
                style={{ ...styles.userImage, left: -6 }}
              />
            </View>
            <ExchangeArrows />
            <View style={styles.userAndItem}>
              <Image source={itemMatched.photos[0]} style={styles.itemImage} />
              <Image
                source={sellerMatched.image}
                style={{ ...styles.userImage, right: -6 }}
              />
            </View>
          </View>
          <Text style={styles.caption}>
            <Text style={styles.boldCaption}>@{sellerMatched.name}</Text> also
            wants your{" "}
            <Text style={styles.boldCaption}>{usersGivingItem?.name}</Text>!
          </Text>
          <TouchableOpacity
            style={styles.sendMessageButton}
            onPress={onSendMessagePress}
          >
            <MessagesOutline style={styles.icon} />
            <Text style={styles.sendMessageText}>Send Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keepThriftingButton}
            onPress={onKeepThriftingPress}
          >
            <Bag style={styles.icon} />
            <Text style={styles.keepThriftingText}>Keep Thrifting</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default ItsAMatchScreen;

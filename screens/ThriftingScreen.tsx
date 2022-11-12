import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import IgnoreIcon from "../assets/IgnoreIcon";
import LikeIcon from "../assets/LikeIcon";
import OfferIcon from "../assets/OfferIcon";
import ItemCard from "../components/ItemCard";
import { profiles } from "../data/profiles";
import { PageProps } from "../Router";
import { Item } from "../types/item";
import { styles } from "./Thrifting.style";

export type ThriftingScreenProps = {
  logOut: () => void;
  userId: string;
} & PageProps;

const isMatch = (item: Item, userId: string): boolean => {
  const userProfile = profiles.find((profile) => profile.userId === userId);
  return userProfile?.matches.some((match) => match.matchItemId === item.itemId) || false;
};

const ThriftingScreen = ({ navigation, userId }: ThriftingScreenProps) => {
  const [page, setPage] = useState(0);

  const items = profiles.filter((profile) => profile.userId !== userId)
                  .map((profile) => profile.items.map((item) => ({item, seller: {name: profile.name, image: profile.image}})))
                  .flat();

  const nextPage = (page + 1) % items.length;

  const onIgnore = () => {
    setPage(nextPage);
  };

  const onLike = () => {
    if (isMatch(items[page].item, userId)) {
      navigation.navigate("ItsAMatchScreen", {
        userId,
        itemMatched: items[page].item,
        sellerMatched: items[page].seller,
      });
    }

    setPage(nextPage);
  };

  const onOfferSelectively = () => {
    setPage(nextPage);
    // TODO
  };

  return (
    <View style={styles.container}>
      <View style={styles.slantedBackground} />
      <View style={styles.cardStack}>
        <ItemCard item={items[nextPage].item} seller={items[nextPage].seller} />
        <ItemCard item={items[page].item} seller={items[page].seller} />
      </View>
      <View style={styles.userActions}>
        <TouchableOpacity style={styles.userAction} onPress={onIgnore}>
          <IgnoreIcon />
          <Text style={styles.userActionText}>Ignore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userAction} onPress={onOfferSelectively}>
          <OfferIcon />
          <Text style={styles.userActionText}>Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userAction} onPress={onLike}>
          <LikeIcon />
          <Text style={styles.userActionText}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThriftingScreen;

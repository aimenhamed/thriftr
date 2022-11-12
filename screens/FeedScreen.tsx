import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import IgnoreIcon from "../assets/IgnoreIcon";
import LikeIcon from "../assets/LikeIcon";
import OfferIcon from "../assets/OfferIcon";
import ItemCard from "../components/ItemCard";
import { profiles } from "../data/profiles";
import { PageProps } from "../Router";
import { styles } from "./Feed.style";

export type FeedScreenProps = {
  logOut: () => void;
  userId: string;
} & PageProps;

const FeedScreen = ({ navigation, logOut, userId }: FeedScreenProps) => {
  const user = profiles.find((profile) => profile.userId === userId);
  const items = profiles.filter(profile => profile.userId !== userId)
                  .map((profile) => profile.items.map((item) => ({item, seller: {name: profile.name, image: profile.image}})))
                  .flat();

  const [page, setPage] = useState(0);

  const nextPage = (page + 1) % items.length;

  const onNext = () => {
    setPage(nextPage);
    console.log("going to next item");
  };

  return (
    <View style={styles.container}>
      <View style={styles.slantedBackground} />
      <View style={styles.cardStack}>
        <ItemCard item={items[nextPage].item} seller={items[nextPage].seller} onNext={() => {}} />
        <ItemCard item={items[page].item} seller={items[page].seller} onNext={onNext} />
      </View>
      <View style={styles.userActions}>
        <TouchableOpacity style={styles.userAction} onPress={onNext}>
          <IgnoreIcon />
          <Text style={styles.userActionText}>Ignore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userAction} onPress={onNext}>
          <OfferIcon />
          <Text style={styles.userActionText}>Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userAction} onPress={onNext}>
          <LikeIcon />
          <Text style={styles.userActionText}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedScreen;

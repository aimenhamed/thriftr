import { useState } from "react";
import { View, Text, Button } from "react-native";
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

  console.log("items are", items);

  const [page, setPage] = useState(0);

  const onNext = () => {
    const newPage = (page + 1) % items.length;
    setPage(newPage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.slantedBackground} />
      <ItemCard item={items[page].item} seller={items[page].seller} />
      <Button onPress={onNext} title="Next" />
      <Button onPress={logOut} title="Sign out" />
      <Button
        onPress={() => navigation.navigate("Template")}
        title="Go To Template"
      />
    </View>
  );
};

export default FeedScreen;

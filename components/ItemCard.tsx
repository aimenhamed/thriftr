import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import { Item } from "../types/item";

export type ItemCardProps = {
  item: Item;
};

const ItemCard = ({
  item: { name, photos, description, color, type, gender, size, condition },
}: ItemCardProps) => {
  const [expandDescription, setExpandDescription] = useState(false);
  const [photoPage, setPhotoPage] = useState(0);

  // TODO pagination bar

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={photos[photoPage]} />
      <View style={styles.itemInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.color}>{color}</Text>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.gender}>{gender}</Text>
        <Text style={styles.size}>{size}</Text>
        <Text style={styles.condition}>{condition}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: "#fff",
    borderWidth: 2,
    overflow: "hidden",
    height: "90%",
    width: "100%",
  },
  image: {
    // flexGrow: 1,
  },
  itemInfo: {
    borderColor: "#fff",
    borderTopWidth: 2,
    padding: 10,
  },
  name: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
    fontFamily: "AzeretMono_700Regular",
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
  color: {},
  type: {},
  gender: {},
  size: {},
  condition: {},
});

export default ItemCard;

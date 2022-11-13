import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";
import { Item } from "../types/item";

export type ItemCardProps = {
  item: Item;
  seller: {
    name: string;
    image: any;
  };
};

const ItemCard = ({
  item: {
    itemId,
    name,
    photos,
    description,
    color,
    type,
    gender,
    size,
    condition,
  },
  seller,
}: ItemCardProps) => {
  const [expandDescription, setExpandDescription] = useState(false);
  const [photoPage, setPhotoPage] = useState(0);

  useEffect(() => {
    setPhotoPage(0);
    setExpandDescription(false);
  }, [itemId]);

  const redirectToProfile = () => {
    console.log("//TODO redirecting to", seller.name);
  };

  const paginateLeft = () => {
    if (photoPage <= 0) return;
    setPhotoPage(photoPage - 1);
  };

  const paginateRight = () => {
    if (photoPage >= photos.length - 1) return;
    setPhotoPage(photoPage + 1);
  };

  const pageDisplayer = [...Array(photos.length).keys()];

  return (
    <View style={styles.card}>
      <View style={styles.photos}>
        <Image style={styles.image} source={photos[photoPage]} />
        <TouchableOpacity onPress={paginateLeft} style={styles.leftPaginator} />
        <TouchableOpacity
          onPress={paginateRight}
          style={styles.rightPaginator}
        />
        <View style={styles.pageDisplayer}>
          {pageDisplayer.map((_, i) =>
            i === photoPage ? (
              <View key={i} style={styles.selectedPage} />
            ) : (
              <View key={i} style={styles.deselectedPage} />
            )
          )}
        </View>
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text
          style={styles.description}
          numberOfLines={expandDescription ? 1000 : 2}
          ellipsizeMode="tail"
          onPress={() => setExpandDescription(!expandDescription)}
        >
          {description}
        </Text>
        <View style={styles.tags}>
          <Text style={styles.tag}>{color}</Text>
          <Text style={styles.tag}>{type}</Text>
          <Text style={styles.tag}>{gender}</Text>
          <Text style={styles.tag}>{size}</Text>
          <Text style={styles.tag}>{condition}</Text>
        </View>
        <View style={styles.seller} onTouchStart={redirectToProfile}>
          <Image style={styles.sellerImage} source={seller.image} />
          <Text style={styles.sellerName}>{seller.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f",
    borderColor: "#fff",
    borderWidth: 2,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  photos: {},
  leftPaginator: {
    position: "absolute",
    left: 0,
    zIndex: 1,
    width: "50%",
    height: "100%",
  },
  rightPaginator: {
    position: "absolute",
    right: 0,
    zIndex: 1,
    width: "50%",
    height: "100%",
  },
  pageDisplayer: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  selectedPage: {
    flexGrow: 1,
    height: 4,
    backgroundColor: "#fff",
    margin: 4,
  },
  deselectedPage: {
    flexGrow: 1,
    height: 4,
    backgroundColor: "#1f1f1fE6",
    margin: 4,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  itemInfo: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#1f1f1f",
    borderColor: "#fff",
    borderTopWidth: 2,
    padding: 6,
    flexGrow: 1,
  },
  name: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
    fontFamily: "AzeretMono_400Regular",
  },
  description: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "AzeretMono_400Regular",
  },
  tags: {
    flexDirection: "row",
    marginTop: 8,
  },
  tag: {
    marginRight: 6,
    padding: 4,
    backgroundColor: "#FFE600",
    fontFamily: "AzeretMono_400Regular",
    fontSize: 12,
  },
  seller: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  sellerImage: {
    width: 36,
    height: 36,
    borderRadius: 100,
    marginRight: 8,
  },
  sellerName: {
    color: "#fff",
    textDecorationLine: "underline",
    fontFamily: "AzeretMono_400Regular",
    fontSize: 16,
  },
});

export default ItemCard;

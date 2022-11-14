import { useState } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Item } from "../../types/item";
import { styles } from "./style";

type TheirItemsProps = {
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
  theirItems: Item[];
  setOfferStage: (stage: number) => void;
};

const TheirItems = ({
  selectedItems,
  setSelectedItems,
  theirItems,
  setOfferStage,
}: TheirItemsProps) => {
  const toggleSelected = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Their Items</Text>
      <View style={styles.items}>
        {theirItems.map((item) => (
          <TouchableOpacity
            key={item.itemId}
            onPress={() => toggleSelected(item.itemId)}
          >
            <Image
              style={{
                ...styles.item,
                borderColor: selectedItems.includes(item.itemId)
                  ? "#FFE600"
                  : "#FFF",
              }}
              source={item.photos[0]}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => setOfferStage(0)}
        >
          <Text style={{ ...styles.text, marginBottom: 0 }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setOfferStage(2)}
        >
          <Text style={{ ...styles.text, marginBottom: 0 }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TheirItems;

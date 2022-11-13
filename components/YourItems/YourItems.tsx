import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Item } from "../../types/item";
import { styles } from "./style";

type YourItemsProps = {
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
  yourItems: Item[];
  setOfferStage: (stage: number) => void;
};

const YourItems = ({
  selectedItems,
  setSelectedItems,
  yourItems,
  setOfferStage,
}: YourItemsProps) => {
  const toggleSelected = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Items</Text>
      <View style={styles.items}>
        {yourItems.map((item) => (
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
      <TouchableOpacity style={styles.button} onPress={() => setOfferStage(1)}>
        <Text style={{ ...styles.text, marginBottom: 0 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default YourItems;

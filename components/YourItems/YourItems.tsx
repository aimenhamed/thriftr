import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Item } from "../../types/item";
import { styles } from "./style";

type YourItemsProps = {
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
  yourItems: Item[];
  setOfferStage: (stage: number) => void;
  setCounterOffer: () => void;
};

const YourItems = ({
  selectedItems,
  setSelectedItems,
  yourItems,
  setOfferStage,
  setCounterOffer,
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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setCounterOffer();
            setOfferStage(0);
          }}
        >
          <Text style={{ ...styles.text, marginBottom: 0 }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setOfferStage(1)}
        >
          <Text style={{ ...styles.text, marginBottom: 0 }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourItems;

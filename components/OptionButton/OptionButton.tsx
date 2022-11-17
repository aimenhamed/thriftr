import { StyleSheet, Text, TouchableOpacity } from "react-native";
import LikeIcon from "../../assets/LikeIcon";
import Selected from "../../assets/Selected";

export const OptionButton = ({text, onPress, state}) => (
  <TouchableOpacity
      style={[styles.optionButton, {backgroundColor: state ? "#FFE600" : "white" }]}
      onPress = {onPress}
  >
    <Text style={styles.buttonText}>
      {text}
    </Text>
    {state ? <LikeIcon style={styles.checkmark} /> : null }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    optionButton: {
      width: 170,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
      pressed: false,
      margin: 20,
    },
    buttonText: {
      fontSize: 16,
      fontFamily: "AzeretMono_400Regular",
      color: "black",
      position: "absolute",
    },
    checkmark: {
      position: "absolute",
      right: 10,
    },
});

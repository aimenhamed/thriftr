import { Text, View } from "react-native";
import { styles } from "./style";

const MessageInput = () => {
  return (
    <View style={{ ...styles.row, justifyContent: "center" }}>
      <View
        style={{
          borderColor: "#FFE600",
          borderWidth: 2,
          height: 50,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ ...styles.text, color: "#FFE600" }}>
          Type a message...
        </Text>
      </View>
      <View
        style={{
          borderColor: "#FFE600",
          borderWidth: 2,
          height: 50,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ ...styles.text, color: "#FFE600" }}>Counter Offer</Text>
      </View>
    </View>
  );
};

export default MessageInput;

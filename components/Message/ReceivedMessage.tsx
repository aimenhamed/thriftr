import { View, Text } from "react-native";
import { styles } from "./style";

type ReceivedMessageProps = {
  message: string;
};

const ReceivedMessage = ({ message }: ReceivedMessageProps) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 20,
        marginBottom: 15,
        marginLeft: 1,
        maxWidth: "75%",
        alignSelf: "flex-start",
        borderRadius: 20,
      }}
    >
      <Text style={styles.message}>{message}</Text>
      <View style={styles.leftArrow}></View>
      <View style={styles.leftArrowOverlap}></View>
    </View>
  );
};

export default ReceivedMessage;

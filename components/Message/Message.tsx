import { View, Text } from "react-native";
import { styles } from "./style";

type MessageProps = {
  message: string;
};

const Message = ({ message }: MessageProps) => {
  return (
    <View
      style={{
        backgroundColor: "#FFE600",
        padding: 20,
        marginLeft: "45%",
        marginBottom: 15,
        marginRight: 1,
        maxWidth: "75%",
        alignSelf: "flex-end",
        borderRadius: 20,
      }}
    >
      <Text style={styles.message}>{message}</Text>
      <View style={styles.rightArrow} />
      <View style={styles.rightArrowOverlap} />
    </View>
  );
};

export default Message;

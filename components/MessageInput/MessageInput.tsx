import { useState } from "react";
import { Text, View, TextInput, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Backend } from "../../backend";
import { Chat, Message } from "../../types/chat";
import { styles } from "./style";

type MessageInputProps = {
  userId: string;
  chatId: string;
  setChat: (chat: Chat) => void;
  setKeyboardVisible: (visible: boolean) => void;
};

const MessageInput = ({
  userId,
  chatId,
  setChat,
  setKeyboardVisible,
}: MessageInputProps) => {
  const [text, setText] = useState<string>("");

  const sendMessage = () => {
    if (text === "") {
      return;
    }
    const message: Message = {
      messageId: "",
      sentBy: userId,
      type: "MESSAGE",
      content: {
        text,
      },
      timestamp: new Date().getTime(),
    };
    Backend.sendMessage(chatId, message);
    setChat(Backend.getChat(chatId)!);
    setText("");
  };

  return (
    <View style={{ ...styles.row, justifyContent: "center", marginBottom: 50 }}>
      <View
        style={{
          borderColor: "#FFE600",
          borderWidth: 2,
          height: 50,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <TextInput
          style={{
            ...styles.text,
            color: "#FFE600",
            width: "100%",
            height: "100%",
            fontSize: 18,
          }}
          placeholder="Type a message..."
          placeholderTextColor="#FFE600"
          onChangeText={setText}
          value={text}
          multiline
          autoCorrect
          onPressIn={() => setKeyboardVisible(true)}
          onBlur={() => {
            setKeyboardVisible(false);
            Keyboard.dismiss();
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          borderColor: "#FFE600",
          borderWidth: 2,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 15,
          width: "100%",
          marginLeft: 10,
        }}
        onPress={sendMessage}
      >
        <Text style={{ ...styles.text, color: "#FFE600", fontSize: 18 }}>
          Send
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;

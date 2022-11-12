import { ScrollView } from "react-native";
import { styles } from "./style";
import ReceivedMessage from "../Message/ReceivedMessage";
import Message from "../Message/Message";
import { Chat } from "../../types/chat";

type MessageListProps = {
  userId: string;
  chat: Chat;
};

const MessageList = ({ userId, chat }: MessageListProps) => {
  return (
    <ScrollView style={styles.content}>
      {chat.messages.map((message) => {
        if (message.sentBy === userId) {
          return message.type === "MESSAGE" ? (
            <Message
              key={message.messageId}
              message={message.content.text || ""}
            />
          ) : (
            <Message key={message.messageId} message={"{offer here}"} />
          );
        } else {
          return message.type === "MESSAGE" ? (
            <ReceivedMessage
              key={message.messageId}
              message={message.content.text || ""}
            />
          ) : (
            <ReceivedMessage key={message.messageId} message={"{offer here}"} />
          );
        }
      })}
    </ScrollView>
  );
};

export default MessageList;

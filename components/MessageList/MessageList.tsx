import { useRef, useState } from "react";
import { ScrollView } from "react-native";
import { styles } from "./style";
import ReceivedMessage from "../Message/ReceivedMessage";
import Message from "../Message/Message";
import { Chat } from "../../types/chat";
import TheirItems from "../TheirItems/TheirItems";
import { Profile } from "../../types/profile";
import YourItems from "../YourItems/YourItems";
import { Match } from "../../types/match";
import CounterTrade from "../Message/CounterTrade";
import CounterOffer from "../Message/CounterOffer";
import { Backend } from "../../backend";

type MessageListProps = {
  user: Profile;
  match: Match;
  chat: Chat;
  setChat: (chat: Chat) => void;
  matchedWith: Profile;
  counterOffer: boolean;
};

const MessageList = ({
  user,
  match,
  chat,
  setChat,
  matchedWith,
  counterOffer,
}: MessageListProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [offerStage, setOfferStage] = useState(0);
  const [yourSelectedItems, setYourSelectedItems] = useState<string[]>([
    match.itemId,
  ]);
  const [theirSelectedItems, setTheirSelectedItems] = useState<string[]>([
    match.matchItemId,
  ]);

  const renderCounterOffer = () => {
    if (counterOffer) {
      if (offerStage === 0) {
        return (
          <YourItems
            selectedItems={yourSelectedItems}
            setSelectedItems={setYourSelectedItems}
            yourItems={user.items}
            setOfferStage={setOfferStage}
          />
        );
      } else if (offerStage === 1) {
        return (
          <TheirItems
            selectedItems={theirSelectedItems}
            setSelectedItems={setTheirSelectedItems}
            theirItems={matchedWith.items}
            setOfferStage={setOfferStage}
          />
        );
      } else if (offerStage === 2) {
        Backend.sendMessage(chat.chatId, {
          messageId: "",
          sentBy: user.userId,
          type: "COUNTER_OFFER",
          content: {
            offer: {
              yourItems: yourSelectedItems,
              theirItems: theirSelectedItems,
            },
            status: "PENDING",
          },
          timestamp: new Date().getTime(),
        });
        setChat(Backend.getChat(chat.chatId)!);
        setOfferStage(3);
      }
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef?.current?.scrollToEnd({ animated: false })
      }
      style={styles.content}
    >
      {chat.messages.map((message) => {
        if (message.sentBy === user.userId) {
          return message.type === "MESSAGE" ? (
            <Message
              key={message.messageId}
              message={message.content.text || ""}
            />
          ) : (
            <CounterTrade
              key={message.messageId}
              user={user}
              matchedWith={matchedWith}
              message={message}
            />
          );
        } else {
          return message.type === "MESSAGE" ? (
            <ReceivedMessage
              key={message.messageId}
              message={message.content.text || ""}
            />
          ) : (
            <CounterOffer
              key={message.messageId}
              user={user}
              matchedWith={matchedWith}
              message={message}
              setChat={setChat}
            />
          );
        }
      })}
      {renderCounterOffer()}
    </ScrollView>
  );
};

export default MessageList;

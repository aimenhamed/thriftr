import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./ChatScreen.style";
import { ChatPageProps } from "../Router";
import ImageStack from "../components/ImageStack/ImageStack";
import images from "../assets";
import MessageList from "../components/MessageList/MessageList";
import MessageInput from "../components/MessageInput/MessageInput";
import BlockDialog from "../components/BlockDialog/BlockDialog";
import { TouchableOpacity } from "react-native-gesture-handler";
import Flag from "../assets/Flag";
import Back from "../assets/Back";
import { Backend } from "../backend";

const ChatScreen = ({ navigation, route }: ChatPageProps) => {
  const { userId, chatId, matched } = route.params;

  const [showBlockDialog, setShowBlockDialog] = useState<boolean>(false);
  const [chat, setChat] = useState(Backend.getChat(chatId)!);
  const [counterOffer, setCounterOffer] = useState<boolean>(false);

  const user = Backend.getProfile(userId)!;
  const matchedWith = Backend.getProfile(matched.matchId)!;

  if (!user) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <ImageStack
            topImage={images[matched.matchItemId]}
            bottomImage={images[matched.matchItemId]}
          />
          <Flag onPress={() => setShowBlockDialog(true)} />
        </View>
        <Text
          style={{ ...styles.text, marginTop: "10%", marginLeft: "25%" }}
        >{`@${matchedWith?.name}`}</Text>
        <TouchableOpacity
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
          onPress={() => setCounterOffer(true)}
        >
          <View style={{ borderColor: "#FFE600", borderWidth: 2, padding: 12 }}>
            <Text style={{ ...styles.text, color: "#FFE600" }}>
              Counter Offer
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: "10%",
            borderBottomColor: "white",
            borderBottomWidth: 1,
          }}
        />
      </View>
      <MessageList
        user={user}
        match={matched}
        chat={chat}
        setChat={setChat}
        matchedWith={matchedWith}
        counterOffer={counterOffer}
      />
      <MessageInput
        userId={userId}
        chatId={chatId}
        setChat={(chat) => setChat(chat)}
      />
      <BlockDialog
        visible={showBlockDialog}
        onDismiss={() => setShowBlockDialog(false)}
        onBlock={() => {
          setShowBlockDialog(false), console.log("Blocked");
        }}
      />
    </View>
  );
};

export default ChatScreen;

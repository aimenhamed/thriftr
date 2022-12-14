import { useState } from "react";
import { Text, View, KeyboardAvoidingView, Pressable } from "react-native";
import { styles } from "./ChatScreen.style";
import { ChatPageProps } from "../Router";
import ImageStack from "../components/ImageStack/ImageStack";
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

  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  const user = Backend.getProfile(userId)!;
  const matchedWith = Backend.getProfile(matched.matchId)!;

  if (!user) {
    return null;
  }

  const matchedItem = matchedWith.items.find(
    (item) => item.itemId === matched.matchItemId
  )!;
  const myItem = user.items.find(
    (item) => item.itemId === matched.itemId
  )!;

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
            <Pressable
              onPress={() =>
                navigation.navigate("Account", { profileId: matched.matchId })
              }
            >
              <ImageStack
                topImage={myItem.photos[0]}
                bottomImage={matchedItem.photos[0]}
                stackStyling={{width: 55}}
                topImageStyling={{height: 35, width: 35, right: 15}}
                bottomImageStyling={{height: 35, width: 35}}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate("Account", { profileId: matched.matchId })
              }
            >
              <Text
                style={{ ...styles.text, marginTop: "10%", marginLeft: 16 }}
              >{`@${matchedWith?.name}`}</Text>
            </Pressable>
          </View>
          <Flag onPress={() => setShowBlockDialog(true)} />
        </View>
        <View
          style={{
            marginTop: "5%",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => setCounterOffer(true)}
            style={{
              borderColor: "#FFE600",
              borderWidth: 2,
              paddingVertical: 4,
              paddingHorizontal: 10,
              width: "38%",
            }}
          >
            <Text style={{ ...styles.text, color: "#FFE600" }}>
              Counter Offer
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: "5%",
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
        setCounterOffer={() => setCounterOffer(false)}
      />
      <MessageInput
        userId={userId}
        chatId={chatId}
        setChat={(chat) => setChat(chat)}
        setKeyboardVisible={(visible: boolean) => setKeyboardVisible(visible)}
      />
      {isKeyboardVisible && <View style={{ height: 60 }} />}
      <BlockDialog
        visible={showBlockDialog}
        onDismiss={() => setShowBlockDialog(false)}
        onBlock={() => {
          setShowBlockDialog(false), console.log("Blocked");
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

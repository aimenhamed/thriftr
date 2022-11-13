import { Text, ScrollView, View } from "react-native";
import { profiles } from "../data/profiles";
import { styles } from "./ChatScreen.style";
import { getChats } from "../data/chats";
import { ChatPageProps, PageProps } from "../Router";
import ImageStack from "../components/ImageStack/ImageStack";
import images from "../assets";
import MessageList from "../components/MessageList/MessageList";
import MessageInput from "../components/MessageInput/MessageInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import Flag from "../assets/Flag";

const ChatScreen = ({ navigation, route }: ChatPageProps) => {
  const { userId, chatId, matched } = route.params;
  const user =
    profiles.find((profile) => profile.userId === userId) || profiles[1];

  const matchedWith = profiles.find(
    (profile) => profile.userId === matched.matchId
  );

  const chat = getChats(matched!.userId, matched!.matchId, [], []).find(
    (chat) => chat.chatId === chatId
  )!;

  if (!user) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.text}>Close</Text>
            <FontAwesomeIcon icon="fa-thin fa-chevron-left" />
          </TouchableOpacity>
          <ImageStack
            topImage={images[matched.matchItemId]}
            bottomImage={images[matched.matchItemId]}
          />
          <Flag />
        </View>
        <Text
          style={{ ...styles.text, marginTop: "10%", marginLeft: "25%" }}
        >{`@${matchedWith?.name}`}</Text>
        <View
          style={{
            marginTop: "10%",
            borderBottomColor: "white",
            borderBottomWidth: 1,
          }}
        />
      </View>
      <MessageList userId={userId} chat={chat} />
      <MessageInput />
    </View>
  );
};

export default ChatScreen;

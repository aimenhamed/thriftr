import { Text, ScrollView, View } from "react-native";
import { profiles } from "../data/profiles";
import { styles } from "./Matches.style";
import { getChats } from "../data/chats";
import { Match } from "../types/match";
import { ChatPageProps, PageProps } from "../Router";

const ChatScreen = ({ route }: ChatPageProps) => {
  const { userId, chatId, matched } = route.params;
  // const user =
  //   profiles.find((profile) => profile.userId === userId) || profiles[1];

  // const chat = getChats(matched!.userId, matched!.matchId, [], []).find(
  //   (chat) => chat.chatId === chatId
  // )!;

  // if (!user) {
  //   return null;
  // }
  return (
    <ScrollView style={styles.container}>
      <Text>{userId + chatId + JSON.stringify(matched)}</Text>
    </ScrollView>
  );
};

export default ChatScreen;

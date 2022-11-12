import { View, Image, Text, TouchableOpacity } from "react-native";
import images from "../../assets";
import { getChats } from "../../data/chats";
import { profiles } from "../../data/profiles";
import { Match } from "../../types/match";
import { getLastMessage } from "../../utils";
import { styles } from "./style";

type MatchCardProps = {
  matched: Match;
  press: () => void;
};

const MatchCard = ({ matched, press }: MatchCardProps) => {
  const matchedWith = profiles.find(
    (profile) => profile.userId === matched.matchId
  );

  const chat = getChats(matched.userId, matched.matchId, [], []).find(
    (chat) => chat.chatId === matched.chatId
  )!;

  const lastMessage = getLastMessage(chat);
  return (
    <TouchableOpacity
      onPress={press}
      style={{ flex: 1, flexDirection: "column" }}
    >
      <View
        style={{
          marginBottom: 16,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={styles.stack}>
          <Image
            source={images[matched.matchItemId]}
            style={{ ...styles.image, top: 12, right: 20 }}
          />
          <Image source={images[matched.matchItemId]} style={styles.image} />
        </View>
        <Text
          style={{
            ...styles.text,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >{`@${matchedWith?.name}`}</Text>
      </View>
      <Text
        style={{ ...styles.text, marginLeft: 105, marginTop: 15 }}
      >{`${lastMessage?.content.text?.substring(0, 35)}..`}</Text>
    </TouchableOpacity>
  );
};

export default MatchCard;

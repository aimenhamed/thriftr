import { View, Image, Text } from "react-native";
import { getChats } from "../../data/chats";
import { profiles } from "../../data/profiles";
import { Match } from "../../types/match";
import { styles } from "./style";

type MatchCardProps = {
  matched: Match;
  newMatch: boolean;
};

const MatchCard = ({ matched, newMatch }: MatchCardProps) => {
  const matchedWith = profiles.find(
    (profile) => profile.userId === matched.matchId
  );

  const chat = getChats(matched.userId, matched.matchId, [], []).find(
    (chat) => chat.chatId === matched.chatId
  );

  const lastMessage = chat?.messages
    .filter((message) => message.type === "MESSAGE")
    .pop();
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View
        style={{
          marginBottom: newMatch ? "0" : "2rem",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={styles.stack}>
          <Image
            source={require(`../../assets/${matched.matchItemId}.png`)}
            style={{ ...styles.image, top: 12, right: 20 }}
          />
          <Image
            source={require(`../../assets/${matched.itemId}.png`)}
            style={styles.image}
          />
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
        style={{ ...styles.text, marginLeft: 105 }}
      >{`${lastMessage?.content.text?.substring(0, 35)}..`}</Text>
    </View>
  );
};

export default MatchCard;

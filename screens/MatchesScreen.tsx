import { Text, ScrollView, View } from "react-native";
import { profiles } from "../data/profiles";
import { styles } from "./Matches.style";
import Match from "../components/Match/Match";
import NewMatch from "../components/NewMatch/NewMatch";
import { ChatPageProps } from "../Router";
import { Backend } from "../backend";

const MatchesScreen = ({ navigation }: ChatPageProps) => {
  const user = profiles.find(
    (profile) => profile.userId === Backend.getCurrentUserId()
  )!;

  if (!user) {
    return null;
  }

  const filteredMatches = user.matches.filter((match) => !match.blocked);
  const newMatches = filteredMatches.filter((match) => match.newMatch) || [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.heading}>New Matches</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{newMatches.length}</Text>
        </View>
      </View>
      <View style={styles.row}>
        {newMatches.length > 0 &&
          newMatches.map((match) => (
            <NewMatch
              key={match.matchId + "NEW MATCH"}
              matched={match}
              press={() =>
                navigation.navigate("Chat", {
                  userId: Backend.getCurrentUserId(),
                  chatId: match.chatId,
                  matched: match,
                })
              }
            />
          ))}
      </View>
      <View style={styles.row}>
        <Text style={styles.heading}>Matches</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{user.matches.length}</Text>
        </View>
      </View>
      <View style={styles.column}>
        {filteredMatches.map((match) => (
          <Match
            key={match.matchId + match.userId}
            matched={match}
            press={() =>
              navigation.navigate("Chat", {
                userId: Backend.getCurrentUserId(),
                chatId: match.chatId,
                matched: match,
              })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MatchesScreen;

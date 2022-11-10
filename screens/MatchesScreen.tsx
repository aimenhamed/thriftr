import { Text, ScrollView, View } from "react-native";
import { profiles } from "../data/profiles";
import { styles } from "./Matches.style";
import Match from "../components/Match/Match";
import NewMatch from "../components/NewMatch/NewMatch";

type MatchesScreenProps = {
  userId: string;
};

const MatchesScreen = ({ userId }: MatchesScreenProps) => {
  const user =
    profiles.find((profile) => profile.userId === userId) || profiles[1];
  const newMatches = user?.matches.filter((match) => match.newMatch) || [];

  if (!user) {
    return null;
  }

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
            <NewMatch key={match.matchId} matched={match} />
          ))}
      </View>
      <View style={styles.row}>
        <Text style={styles.heading}>Matches</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{user.matches.length}</Text>
        </View>
      </View>
      <View style={styles.column}>
        {user.matches.map((match) => (
          <Match
            key={match.matchId + match.userId}
            matched={match}
            newMatch={false}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MatchesScreen;

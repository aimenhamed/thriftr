import { View, Image, Text } from "react-native";
import { profiles } from "../../data/profiles";
import { Match } from "../../types/match";
import { styles } from "./style";

type NewMatchCardProps = {
  matched: Match;
};

const NewMatchCard = ({ matched }: NewMatchCardProps) => {
  const matchedWith = profiles.find(
    (profile) => profile.userId === matched.matchId
  );
  return (
    <View>
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
      <Text style={styles.text}>{`@${
        matchedWith?.name.substring(10) || "missing"
      }..`}</Text>
    </View>
  );
};

export default NewMatchCard;

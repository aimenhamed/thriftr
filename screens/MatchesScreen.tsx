import { Text, ScrollView } from "react-native";
import { styles } from "./Matches.style";

const MatchesScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.heading}>New Matches</Text>
    </ScrollView>
  );
};

export default MatchesScreen;

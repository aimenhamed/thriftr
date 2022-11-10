import { Text, ScrollView } from "react-native";
import { styles } from "./Matches.style";

const MatchesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>New Matches</Text>
    </ScrollView>
  );
};

export default MatchesScreen;

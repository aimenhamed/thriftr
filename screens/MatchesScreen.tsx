import { Text, ScrollView, View } from "react-native";
import { styles } from "./Matches.style";

const MatchesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.heading}>New Matches</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>5</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.heading}>Matches</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>5</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MatchesScreen;

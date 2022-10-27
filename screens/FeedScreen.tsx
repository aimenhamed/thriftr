import { View, Text, Button } from "react-native";
import { profiles } from "../data/profiles";
import { PageProps } from "../Router";

export type FeedScreenProps = {
  logOut: () => void;
  userId: string;
} & PageProps;

const FeedScreen = ({ navigation, logOut, userId }: FeedScreenProps) => {
  const user = profiles.find((profile) => profile.userId === userId);
  return (
    <View>
      <Text>Feed</Text>
      <Text>Welcome {user?.name}</Text>
      <Button onPress={logOut} title="Sign out" />
      <Button
        onPress={() => navigation.navigate("Template")}
        title="Go To Template"
      />
    </View>
  );
};

export default FeedScreen;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItsAMatchScreen from "./ItsAMatchScreen";
import ThriftingScreen from "./ThriftingScreen";
import { PageProps } from "../Router";

type StackParamList = {
  ThriftingScreen: any;
  ItsAMatchScreen: any;
};

const FeedStack = createNativeStackNavigator<StackParamList>();

export type FeedStackScreenProps = {
  logOut: () => void;
  userId: string;
} & PageProps;

const FeedStackScreen = ({ userId }: FeedStackScreenProps) => {
  return (
    <FeedStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: "vertical",
      }}
    >
      <FeedStack.Screen name="ThriftingScreen">
        {(props: any) => <ThriftingScreen {...props} userId={userId} />}
      </FeedStack.Screen>
      <FeedStack.Screen name="ItsAMatchScreen">
        {(props: any) => <ItsAMatchScreen {...props} />}
      </FeedStack.Screen>
    </FeedStack.Navigator>
  );
};

export default FeedStackScreen;

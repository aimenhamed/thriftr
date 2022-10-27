import { View, Text, Button } from "react-native";
import { PageProps } from "../Router";

type LoginScreenProps = {
  logIn: (userId: string) => void;
} & PageProps;

const LoginScreen = ({ logIn }: LoginScreenProps) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  return (
    <View>
      <Text>Thriftr</Text>
      <Button onPress={() => logIn(userId)} title="Log in" />
    </View>
  );
};

export default LoginScreen;

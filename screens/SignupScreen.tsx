import { View, Text, Button } from "react-native";
import { PageProps } from "../Router";

type SignupScreenProps = {
    logIn: (userId: string) => void;
    navigation: () => any;
  } & PageProps;

const SignupScreen = () => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  return (
    <View>
      <Text>Thriftr</Text>
    </View>
  );
};

export default SignupScreen;
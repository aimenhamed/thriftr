import { View, Text, TouchableOpacity, KeyboardAvoidingView, Touchable} from "react-native";
import { PageProps } from "../Router";
import React, {useState} from 'react';
import { styles } from "./SignupScreen.style";
import ThriftBig from "../assets/ThriftrBig";
import { TextInput } from "react-native-gesture-handler";

type SignupScreenProps = {
    logIn: (userId: string) => void;
    navigation: () => any;
  } & PageProps;

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let keyboardShown = false;

  return (
    <KeyboardAvoidingView style={styles.backgroundView} behavior="padding">
      <View style={styles.upperView}>
        <ThriftBig
          style={styles.logoimage}
        />
        <View style={styles.yellowBox}></View>
      </View>
      <View style={styles.lowerView}>
        <TextInput
            style={styles.inputUsername}
            placeholder="Username"
            onChangeText={(username) => setUsername(username)}  
        />
        <TextInput
            style={styles.inputPhoneNumber}
            placeholder="Phone number"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
        <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            secureTextEntry = {true}
        />
        <TextInput
            style={styles.inputConfirmPassword}
            placeholder="Re-enter password"
            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            secureTextEntry = {true} 
        />
        
        <TouchableOpacity 
          style={styles.signupButton} 
          // onPress={ () => navigation.navigate("FirstOnboarding")}
        >
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
        <Text style={styles.forgotText} onPress={ () => navigation.navigate("Thriftr")}>
           Already have an account?
        </Text>
      </View>
      <View style={{height: 30}}></View>
    </KeyboardAvoidingView>

  );
};

export default SignupScreen;
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./SignupScreen.style";
import ThriftBig from "../assets/ThriftrBig";
import BlackBackArrow from "../assets/BlackBackArrow";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Backend } from "../backend";
import uuid from "react-native-uuid";

// type SignupScreenProps = {
//     logIn: (userId: string) => void;
//     navigation: () => any;
//   } & PageProps;

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let keyboardShown = false;

  const returnValue = (
    username: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string
  ) => {
    if (
      username.trim().length > 0 &&
      phoneNumber.trim().length > 0 &&
      password.trim().length > 0 &&
      confirmPassword.trim().length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkPassword = (password: string, confirmPassword: string) => {
    if (password == confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <KeyboardAvoidingView style={styles.backgroundView} behavior="position">
      <View style={styles.keyboardDismisser} onTouchStart={Keyboard.dismiss} />
      <View style={styles.yellowBox} onTouchStart={Keyboard.dismiss} />
      <View style={styles.upperView} onTouchStart={Keyboard.dismiss}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <BlackBackArrow />
        </TouchableOpacity>
        <ThriftBig style={styles.logoimage} />
      </View>
      <View style={styles.lowerView}>
        <TextInput
          style={styles.inputUsername}
          placeholder="Username"
          onChangeText={(username) => setUsername(username)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.inputPhoneNumber}
          placeholder="Phone number"
          keyboardType="numeric"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.inputConfirmPassword}
          placeholder="Re-enter password"
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
          secureTextEntry={true}
          placeholderTextColor="#AAAAAA"
        />

        {returnValue(username, phoneNumber, password, confirmPassword) ? (
          <TouchableOpacity
            onPress={() => {
              if (checkPassword(password, confirmPassword)) {
                navigation.navigate("FirstOnboardingScreen");
                const userId = uuid.v4() as string;
                Backend.addProfile({
                  userId,
                  items: [],
                  name: username,
                  matches: [],
                  preferences: {
                    categories: [],
                    sizes: [],
                    genders: [],
                    colors: [],
                  },
                  image: require("../assets/test.png"),
                });
                Backend.setCurrentUserId(userId);
              } else {
                Alert.alert("Alert", "Passwords are not the same");
              }
            }}
            style={styles.signupButton}
          >
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Signup Failed", "Please fill in all details")
            }
            style={styles.signupButton}
          >
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.alreadyHaveAccountButton}>
          <Text
            style={styles.alreadyHaveAccountText}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 30 }}></View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

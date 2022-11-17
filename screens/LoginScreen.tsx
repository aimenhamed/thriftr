import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { LoginProps } from "../Router";
import { styles } from "./LoginScreen.style";
import React, { useState } from "react";
import ThriftBig from "../assets/ThriftrBig";
import { Backend } from "../backend";

const returnValue = (username: string, password: string) => {
  if (username.trim().length > 0 && password.trim().length > 0) {
    return true;
  } else {
    return false;
  }
};

const LoginScreen = ({ navigation }: LoginProps) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.backgroundView} behavior="position">
      <View style={styles.keyboardDismisser} onTouchStart={Keyboard.dismiss} />
      <View style={styles.yellowBox} onTouchStart={Keyboard.dismiss} />
      <View style={styles.upperView} onTouchStart={Keyboard.dismiss}>
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
          style={styles.inputPassword}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          placeholderTextColor="#AAAAAA"
        />

        {returnValue(username, password) ? (
          <TouchableOpacity
            onPress={() => {
              Backend.setCurrentUserId(userId);
              navigation.navigate("main");
            }}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Login Failed",
                "Please enter your username and password"
              )
            }
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>
            Forgot your username and password?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 30 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

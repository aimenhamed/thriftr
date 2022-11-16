import { View, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from "react-native";
import { PageProps } from "../Router";
import { styles } from "./LoginScreen.style";
import React, {useState} from 'react';
import ThriftBig from "../assets/ThriftrBig";

type LoginScreenProps = {
  logIn: (userId: string) => void;
} & PageProps;

const returnValue = (username: string, password: string) => {
  if (username.trim().length > 0 && password.trim().length > 0) {
    return true
  } else {
    return false
  }
}

const LoginScreen = ({ logIn, navigation }: LoginScreenProps) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView 
      style={styles.backgroundView}
      behavior= 'padding'
    >
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
          style={styles.inputPassword} 
          placeholder="Password" 
          onChangeText={(password) => setPassword(password)}
          secureTextEntry = {true}
        />
        
        {returnValue(username, password) ? (
          <TouchableOpacity
          onPress={() => logIn(userId)}
          onPress={() => navigation.navigate("router2")}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        ): (
          <TouchableOpacity
            onPress={() => Alert.alert('Alert', 'Please enter username and password')}
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
        <Text style={styles.forgotText}>
          Forgot your username and password?
        </Text>
      </View>
      <View style={{height: 30}}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

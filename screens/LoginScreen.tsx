import { View, Text, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { PageProps } from "../Router";
import { styles } from "./LoginScreen.style";
import React, {useState} from 'react';
import Thrift from "../assets/ThriftrFilled";

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

const LoginScreen = ({ logIn }: LoginScreenProps) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.backgroundView}>
      <View style={styles.upperView}>
        <Thrift
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


        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
        <Text style={styles.forgotText}>
          Forgot your username and password?
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

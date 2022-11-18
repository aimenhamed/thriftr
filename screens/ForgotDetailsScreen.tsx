import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Keyboard,
  } from "react-native";
  import { styles } from "./ForgotDetailsScreen.style";
  import React, { useState } from "react";
  import { Backend } from "../backend";
  import BlackBackArrow from "../assets/BlackBackArrow";
import ThriftBig from "../assets/ThriftrBig";

  const ForgotDetailsScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const returnValue = (
      phoneNumber: string,
    ) => {
      if (phoneNumber.trim().length > 0) {
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
            style={styles.inputPhoneNumber}
            placeholder="Phone Number"
            keyboardType="numeric"
            placeholderTextColor="#AAAAAA"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
            
        {returnValue(phoneNumber) ? (
          <TouchableOpacity
          onPress={() => {Alert.alert("", 
                          "A message has been sent to your phone containing your account information")}}
          style={styles.getDetailsButton}
          >
            <Text style={styles.getDetailsText}>Recover Details</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
          onPress={() => {Alert.alert("Recover Details Failed", 
                          "Please enter your phone number")}}
          style={styles.getDetailsButton}
          >
            <Text style={styles.getDetailsText}>Recover Details</Text>
          </TouchableOpacity>
        )}

        </View>
        <View style={{ height: 30 }}></View>
      </KeyboardAvoidingView>
    );
  };

  export default ForgotDetailsScreen;

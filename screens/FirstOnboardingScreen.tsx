import { View, Text, Alert, } from "react-native";
import { PageProps } from "../Router";
import React, {useState, useEffect} from 'react';
import { styles } from "./FirstOnboardingScreen.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowRight from "../assets/ArrowRight";
import { OptionButton } from "../components/OptionButton/OptionButton";

const FirstOnboardingScreen = ({ navigation }) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  const [isFirstPressed, setFirstPressed] = useState(false);
  const [isSecondPressed, setSecondPressed] = useState(false);
  const [isThirdPressed, setThirdPressed] = useState(false);

  const handleFirstPressed = () => setFirstPressed(current => !current);
  const handleSecondPressed = () => setSecondPressed(current => !current);
  const handleThirdPressed = () => setThirdPressed(current => !current);

  return (
    <View style={styles.background}>
      <View style={[styles.viewport, {justifyContent: "flex-start"}]}>
        <Text style={[styles.normalText, {fontSize: 16}, {paddingBottom: 20},
                      {paddingLeft: 15}, {paddingTop: 100}]}>
          Before we start...
        </Text>
        <Text style={[styles.normalText, {fontSize: 16}, {paddingLeft: 15}]}>
          What gender clothes are you looking for?
        </Text>
      </View>

      <View style={[styles.viewport, {alignItems: "center"}, {justifyContent: "center"},
                    {flex: 40}]}>
        <OptionButton
          text = "Male"
          onPress= { () => handleFirstPressed()}
          state = {isFirstPressed}
        />
        <OptionButton
          text = "Female"
          onPress= { () => handleSecondPressed()}
          state = {isSecondPressed}
        />
        <OptionButton
          text = "Unisex"
          onPress= { () => handleThirdPressed()}
          state = {isThirdPressed}
        />
      </View>

      <View style={[styles.viewport, {alignItems: "center"}, {flex: 25}]}>
        <Text style={[styles.normalText, {marginTop: -50}]}>
          You can change this later
        </Text>
        <Text style={styles.normalText}>
          through your profile
        </Text>
        <TouchableOpacity 
          style={[styles.submitButton, 
          {backgroundColor: isFirstPressed || isSecondPressed || isThirdPressed ? 
            "#FFE600" : "#575117"},
          {marginTop: 30}]}
          disabled = {isFirstPressed || isSecondPressed || isThirdPressed ? false : true}
          onPress={ () => navigation.navigate("SecondOnboardingScreen")}
        >
          <Text style={styles.buttonText}>
            Next
          </Text>
          <View style={{flex: 3}}>
          </View>
          <View style={{flex: 1}}>
            <ArrowRight style={styles.arrow}/>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default FirstOnboardingScreen;

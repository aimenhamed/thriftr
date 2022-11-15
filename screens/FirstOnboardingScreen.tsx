import { View, Text, Alert, } from "react-native";
import { PageProps } from "../Router";
import React, {useState, useEffect} from 'react';
import { styles } from "./FirstOnboardingScreen.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowRight from "../assets/ArrowRight";

type FirstOnboardingScreenProps = {
  logIn: (userId: string) => void;
  navigation: () => any;
} & PageProps;

const FirstOnboardingScreen = ({ navigation }: FirstOnboardingScreenProps) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  const [isFirstPressed, setFirstPressed] = useState(false);
  const [isSecondPressed, setSecondPressed] = useState(false);
  const [isThirdPressed, setThirdPressed] = useState(false);


  const OptionButton = ({text, onPress, state}) => (
    <TouchableOpacity 
      style={[styles.optionButton, {backgroundColor: state ? "#FFE600" : "white" } ]}
      onPress = {onPress}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  const handleFirstPressed = () => {
    setFirstPressed(current => !current);
    setSecondPressed(false);
    setThirdPressed(false);
  };

  const handleSecondPressed = () => {
    setFirstPressed(false);
    setSecondPressed(current => !current);
    setThirdPressed(false);
  };

  const handleThirdPressed = () => {
    setFirstPressed(false);
    setSecondPressed(false);
    setThirdPressed(current => !current);
  };

  return (
    <View style={styles.background}>
      <View style={styles.viewport}>
        <Text style={[styles.normalText, {fontSize: 16}, {paddingLeft: 20}, {paddingBottom: 10}]}>
          Before we start...
        </Text>
        <Text style={[styles.normalText, {fontSize: 16}, {padding: 20}]}>
          Are you looking for male or female clothes?
        </Text>
      </View>

      <View style={[styles.viewport, {alignItems: "center"}, {justifyContent: "space-evenly"}]}>
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
          text = "Both"
          onPress= { () => handleThirdPressed()}
          state = {isThirdPressed}
        />
      </View>

      <View style={[styles.viewport, {alignItems: "center"}]}>
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
          // onPress={ () => isFirstPressed || isSecondPressed || isThirdPressed ?
          //   navigation.navigate("SecondOnboardingScreen") : 
          //   Alert.alert('Alert', 'Please selection an option')}
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
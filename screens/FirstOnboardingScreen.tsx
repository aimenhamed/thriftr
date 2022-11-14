import { View, Text, Button } from "react-native";
import { PageProps } from "../Router";
import React, {useState} from 'react';
import { styles } from "./FirstOnboardingScreen.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowRight from "../assets/ArrowRight";

type FirstOnboardingScreenProps = {
  logIn: (userId: string) => void;
  navigation: () => any;
} & PageProps;

const FirstOnboardingScreen = ({ navigation }: FirstOnboardingScreenProps) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
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
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.buttonText}>
            Male
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.buttonText}>
            Female
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.buttonText}>
            Both
          </Text>
        </TouchableOpacity>
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
          {marginTop: 30}]}
          // onPress={ () => navigation.navigate("SecondOnboarding")}
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
import { View, Text, Alert, } from "react-native";
import { PageProps } from "../Router";
import React, {useState, useEffect} from 'react';
import { styles } from "./ThirdOnboardingScreen.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowRight from "../assets/ArrowRight";
import WhitePlus from "../assets/WhitePlus";
import { profileContext } from "../profileContext";
import { Profile } from "../types/profile";

type ThirdOnboardingScreenProps = {
  logIn: (userId: string) => void;
  navigation: () => any;
} & PageProps;

const ThirdOnboardingScreen = ({ navigation }: ThirdOnboardingScreenProps) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";

  return (
    <View style={styles.background}>
      <View style={styles.viewport}>
        <Text style={[styles.normalText, {fontSize: 16}, {paddingLeft: 20}]}>
          What items do you want to list for trade?
        </Text>
      </View>

      <View 
        style={[styles.viewport, 
                {alignItems: "flex-start"}, 
                {justifyContent: "flex-start"}, 
                {flex:40},
                {paddingLeft: 20}]}>
        <TouchableOpacity 
            style={styles.addButton}
            // onPress = { () => navigation.navigate("AddListingScreen")}
        >
            <WhitePlus/>
        </TouchableOpacity>
      </View>

      <View style={[styles.viewport, {alignItems: "center"}, {flex: 25}]}>
        <Text style={[styles.normalText, {marginTop: -50}]}>
          You can change this later
        </Text>
        <Text style={styles.normalText}>
          through your profile
        </Text>
        <TouchableOpacity 
            style={[styles.submitButton, {marginTop: 30}]}
        //   style={[styles.submitButton, 
        //   {backgroundColor: isFirstPressed || isSecondPressed || isThirdPressed ? 
        //     "#FFE600" : "#575117"},
        //   {marginTop: 30}]}
          // disabled = {isFirstPressed || isSecondPressed || isThirdPressed ? true : false}
            onPress={ () => navigation.navigate("router2")}
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

export default ThirdOnboardingScreen;
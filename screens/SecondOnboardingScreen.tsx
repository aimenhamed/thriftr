import { View, Text, Alert, TouchableOpacity} from "react-native";
import { PageProps } from "../Router";
import React, {useState, useEffect} from 'react';
import { styles } from "./SecondOnboardingScreen.style";
import ArrowRight from "../assets/ArrowRight";
import WhiteBackArrow from "../assets/WhiteBackArrow";

// type SecondOnboardingScreenProps = {
//   logIn: (userId: string) => void;
//   navigation: () => any;
// } & PageProps;

const SecondOnboardingScreen = ({ navigation }) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  const [isShirtsPressed, setShirtsPressed] = useState(false);
  const [isPantsPressed, setPantsPressed] = useState(false);
  const [isShoesPressed, setShoesPressed] = useState(false);
  const [isHoodiesPressed, setHoodiesPressed] = useState(false);
  const [isHatsPressed, setHatsPressed] = useState(false);
  const [isSweatersPressed, setSweatersPressed] = useState(false);
  const [isJewelleryPressed, setJewelleryPressed] = useState(false);
  const [isJacketsPressed, setJacketsPressed] = useState(false);
  const [isShortsPressed, setShortsPressed] = useState(false);
  const [isGlovesPressed, setGlovesPressed] = useState(false);

  const OptionButton = ({text, onPress, state}) => (
    <TouchableOpacity 
      style={[styles.optionButton, {backgroundColor: state ? "#FFE600" : "white" }]}
      onPress = {onPress}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  const handleShirtsPressed = () => {
    setShirtsPressed(current => !current);

  };

  const handlePantsPressed = () => {
    setPantsPressed(current => !current);
  };

  const handleShoesPressed = () => {
    setShoesPressed(current => !current);
  };

  const handleHoodiesPressed = () => {
    setHoodiesPressed(current => !current);
  };

  const handleHatsPressed = () => {
    setHatsPressed(current => !current);
  };

  const handleSweatersPressed = () => {
    setSweatersPressed(current => !current);
  };

  const handleJewelleryPressed = () => {
    setJewelleryPressed(current => !current);
  };

  const handleJacketsPressed = () => {
    setJacketsPressed(current => !current);
  };

  const handleShortsPressed = () => {
    setShortsPressed(current => !current);
  };

  const handleGlovesPressed = () => {
    setGlovesPressed(current => !current);
  };

  return (
    <View style={styles.background}>
      <TouchableOpacity 
          style={styles.backarrow}
          onPress={() => navigation.navigate("FirstOnboardingScreen")}
        >
          <WhiteBackArrow/>
      </TouchableOpacity>

      <View style={[styles.viewport, {justifyContent: "flex-start"}]}>
      
        <Text style={[styles.normalText, {fontSize: 16}, {paddingLeft: 15},
                      {paddingTop: 100}]}>
          What categories of clothes do you you want appearing in your feed?
        </Text>
      </View>

      <View style={[styles.viewport, {alignItems: "center"}, {justifyContent: "space-between"}, {flex: 40}]}>
        <View style={styles.horizontalViewport}>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Shirts"
                    onPress= { () => handleShirtsPressed()}
                    state = {isShirtsPressed}
                />
            </View>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Pants"
                    onPress= { () => handlePantsPressed()}
                    state = {isPantsPressed}
                />
            </View>
        </View>
        
        <View style={styles.horizontalViewport}>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Shoes"
                    onPress= { () => handleShoesPressed()}
                    state = {isShoesPressed}
                />
            </View>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Hoodies"
                    onPress= { () => handleHoodiesPressed()}
                    state = {isHoodiesPressed}
                />
            </View>
        </View>

        <View style={styles.horizontalViewport}>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Hats"
                    onPress= { () => handleHatsPressed()}
                    state = {isHatsPressed}
                />
            </View>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Sweaters"
                    onPress= { () => handleSweatersPressed()}
                    state = {isSweatersPressed}
                />
            </View>
        </View>

        <View style={styles.horizontalViewport}>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Jewellery"
                    onPress= { () => handleJewelleryPressed()}
                    state = {isJewelleryPressed}
                />
            </View>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Jackets"
                    onPress= { () => handleJacketsPressed()}
                    state = {isJacketsPressed}
                />
            </View>
        </View>

        <View style={styles.horizontalViewport}>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Shorts"
                    onPress= { () => handleShortsPressed()}
                    state = {isShortsPressed}
                />
            </View>
            <View style={styles.insideHorizontalViewport}>
                <OptionButton 
                    text = "Gloves"
                    onPress= { () => handleGlovesPressed()}
                    state = {isGlovesPressed}
                /> 
            </View>
        </View>
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
          {backgroundColor: isShirtsPressed || isPantsPressed || isShoesPressed 
            || isHoodiesPressed || isHatsPressed || 
            isSweatersPressed || isJewelleryPressed || isJacketsPressed ||
            isShortsPressed || isGlovesPressed ? 
            "#FFE600" : "#575117"},
          {marginTop: 30}]}
          disabled = {(isShirtsPressed || isPantsPressed || isShoesPressed 
            || isHoodiesPressed || isHatsPressed || 
            isSweatersPressed || isJewelleryPressed || isJacketsPressed ||
            isShortsPressed || isGlovesPressed) ? false : true}
          onPress={ () => navigation.navigate("ThirdOnboardingScreen")}
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

export default SecondOnboardingScreen;
import { View, Text, Alert, useWindowDimensions, Keyboard, ImageSourcePropType, 
        Pressable, Image} from "react-native";
import { PageProps } from "../Router";
import React, {useState, useEffect, useCallback, useContext, Profiler} from 'react';
import { styles } from "./ThirdOnboardingScreen.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowRight from "../assets/ArrowRight";
import WhitePlus from "../assets/WhitePlus";
import { useNavigation } from "@react-navigation/native";
import { profileContext, useProfile } from "../profileContext";
import { Profile } from "../types/profile";

// type ThirdOnboardingScreenProps = {
//   navigation: () => any;
// } & PageProps;

type ThirdOnboardingScreenProps = {
  currentUser: Boolean;
  profile: Profile;
};

// type AccountScreenProps = {
//   currentUser: Boolean;
//   profile: Profile;
// };

const ThirdOnboardingScreen = (props: ThirdOnboardingScreenProps) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const {profile, setCurrentItem } = useContext(profileContext);
  //const profile = useProfile();


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
              onPress = { () => {navigation.navigate("modal")}}
          >
              <WhitePlus/>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          {profile.items.map((item, i) => (
            <Pressable
              onPress={() => {
                  navigation.navigate("modal"); setCurrentItem(item.itemId);
              }}
            >
              <Image
                key={i}
                source={item.photos[0]}
                style={{ width: width / 3, height: width / 3 }}
              />
            </Pressable>
          ))}
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
          {backgroundColor: profile.items.length == 0 ? 
            "#575117" : "#FFE600"},
          {marginTop: 30}]}
            disabled = {profile.items.length == 0 ? true : false}
            onPress={ () => navigation.navigate("router2")}
        >
          <Text style={styles.buttonText}>
            Start Thrifting
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ThirdOnboardingScreen;
import { View, Text, Alert, useWindowDimensions, Keyboard, ImageSourcePropType, 
        Pressable, Image, ScrollView, TouchableOpacity} from "react-native";
import { PageProps } from "../Router";
import React, {useState, useEffect, useCallback, useContext, Profiler} from 'react';
import { styles } from "./ThirdOnboardingScreen.style";
import ArrowRight from "../assets/ArrowRight";
import WhitePlus from "../assets/WhitePlus";
import { useNavigation } from "@react-navigation/native";
import { profileContext, useProfile } from "../profileContext";
import { Profile } from "../types/profile";
import WhiteBackArrow from "../assets/WhiteBackArrow";


type ThirdOnboardingScreenProps = {
  currentUser: Boolean;
  profile: Profile;
};

const ThirdOnboardingScreen = (props: ThirdOnboardingScreenProps) => {
  const userId = "74aa9a46-aff3-4ecc-a817-f6697b18eb74";
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const {profile, setCurrentItem } = useContext(profileContext);
  //const profile = useProfile();


  return (
    <View style={styles.background}>
      <TouchableOpacity
          style={styles.backarrow}
          onPress={() => navigation.navigate("SecondOnboardingScreen")}
        >
          <WhiteBackArrow/>
      </TouchableOpacity>

      <View style={[styles.viewport, {justifyContent:"flex-start"}]}>
        <Text style={[styles.normalText, {fontSize: 16}, {paddingLeft: 13}, 
                      {paddingTop: 100}]}>
          What items do you want to list for trade?
        </Text>
      </View>

      <View style={[{paddingLeft: 40}, {paddingRight: 40}, {display:"flex"}, {flex:40}]}>
            <View
              style={[{ flexDirection: "row" },
              {justifyContent: "space-between"},
              {flexWrap: "wrap"}, {flex:1}]}
            >
              {profile.items.map((item, i) => (
                <Pressable
                  key={i}
                  onPress={() => {
                      navigation.navigate("modal"); setCurrentItem(item.itemId);
                  }}
                >
                  <Image
                    source={item.photos[0]}
                    style={[{ width: 0.4 * (width - 50)}, {height : 0.4 * (width - 50)},
                              {borderColor: "white"}, {borderWidth: 1}, {marginBottom:30}]}
                  />
                </Pressable>
              ))}
                <TouchableOpacity 
                    style={[styles.addButton, { width: 0.4 * (width - 50)}, 
                            {height : 0.4 * (width - 50)}]}
                    onPress = { () => {navigation.navigate("modal")}}
                >
                    <WhitePlus/>
                </TouchableOpacity>
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

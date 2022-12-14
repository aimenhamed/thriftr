import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";
import LoginScreen from "./screens/LoginScreen";
import ForgotDetailsScreen from "./screens/ForgotDetailsScreen";
import SignupScreen from "./screens/SignupScreen";
import FirstOnboardingScreen from "./screens/FirstOnboardingScreen";
import SecondOnboardingScreen from "./screens/SecondOnboardingScreen";
import ThirdOnboardingScreen from "./screens/ThirdOnboardingScreen";
import MatchesScreen from "./screens/MatchesScreen";
import AccountScreen from "./screens/AccountScreen";
import AddListingScreen from "./screens/AddListingScreen";
import { profileContext, useProfile } from "./profileContext";
import EditProfileScreen from "./screens/EditProfileScreen";
import ChatScreen from "./screens/ChatScreen";
import MessagesFilled from "./assets/MessagesOutline";
import MessagesOutline from "./assets/MessagesFilled";
import AccountFilled from "./assets/AccountFilled";
import AccountOutline from "./assets/AccountOutline";
import ThriftrFilled from "./assets/ThriftrFilled";
import ThriftrOutlined from "./assets/ThriftrOutlined";
import FeedStackScreen from "./screens/FeedStackScreen";
import { Match } from "./types/match";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Backend } from "./backend";
import OfferSelectivelyScreenAccount from "./screens/OfferSelectivelyScreenAccount";

type MatchesParamList = {
  MatchesScreen: undefined;
  Chat: { userId: string; chatId: string; matched: Match };
  Account: {profileId: string};
};

type TabsParamList = {
  Thriftr: any;
  Matches: undefined;
  Feed: undefined;
  Account: undefined;
  Template: any;
  ThriftingScreen: any;
  ItsAMatchScreen: any;
};

const Tab = createMaterialTopTabNavigator();
const MatchesStack = createNativeStackNavigator<MatchesParamList>();
const AccountStack = createNativeStackNavigator();

export type ChatPageProps = NativeStackScreenProps<MatchesParamList, "Chat">;
export type PageProps = MaterialTopTabScreenProps<TabsParamList>;

const TabNavigator = () => {
  const { profile } = useContext(profileContext);
  const Main = (props: any) => <FeedStackScreen {...props} />;
  const Matches = (props: any) => <MatchesScreen {...props} />;
  const Chat = (props: any) => <ChatScreen {...props} />;
  const MatchesStackScreen = () => (
    <MatchesStack.Navigator>
      <MatchesStack.Screen
        name="MatchesScreen"
        component={Matches}
        options={{ headerShown: false }}
      />
      <MatchesStack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
        initialParams={{ chatId: "", matched: {} as Match }}
      />
    </MatchesStack.Navigator>
  );

  const Account = (props: any) => <AccountScreen {...props} />;
  const CurrentAccount = (props: any) => <AccountScreen {...props} />;
  const OfferSelectivelyScreenForAccountPage = (props: any) => <OfferSelectivelyScreenAccount {...props} />;
  const AccountStackScreen = () => (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen
        name="CurrentAccount"
        component={CurrentAccount}
        initialParams={{ profileId: Backend.getCurrentUserId() }}
      />
      <AccountStack.Screen
        name="Account"
        component={Account}
        initialParams={{ profileId: '' }}
      />
      <AccountStack.Screen
        name="OfferSelectivelyScreenAccount"
        component={OfferSelectivelyScreenForAccountPage}
        options={{
          gestureDirection: "vertical",
          gestureEnabled: false,
          animationDuration: 200,
        }}
      />
    </AccountStack.Navigator>
  )

  return (
    <Tab.Navigator
      initialRouteName="Thriftr"
      sceneContainerStyle={{
        backgroundColor: "#1F1F1F",
      }}
      screenOptions={{
        swipeEnabled: false,
        tabBarShowLabel: false,
        tabBarItemStyle: { padding: 0, minHeight: 0 },
        tabBarContentContainerStyle: {
          justifyContent: "space-between",
          marginTop: 60,
        },
        tabBarStyle: {
          backgroundColor: "#FFE600",
          shadowColor: "transparent",
          elevation: 0,
        },
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
        },
        tabBarIndicator: () => null,
        animationEnabled: false,
      }}
    >
      <Tab.Screen
        name="Matches"
        children={MatchesStackScreen}
        options={{
          tabBarIcon: (props) =>
            props.focused ? <MessagesFilled /> : <MessagesOutline />,
        }}
      />
      <Tab.Screen
        name="Thriftr"
        options={{
          tabBarIcon: (props) =>
            props.focused ? <ThriftrFilled /> : <ThriftrOutlined />,
        }}
        children={Main}
      />
      <Tab.Screen
        name="AccountTab"
        children={AccountStackScreen}
        initialParams={{ profileId: Backend.getCurrentUserId() }}
        options={{
          tabBarIcon: (props) =>
            props.focused ? <AccountFilled /> : <AccountOutline />,
        }}
      />
    </Tab.Navigator>
  );
};

export type RootParamList = {
  LoginScreen: undefined;
  ForgotDetailsScreen: undefined;
  SignupScreen: undefined;
  FirstOnboardingScreen: undefined;
  SecondOnboardingScreen: undefined;
  ThirdOnboardingScreen: undefined;
  main: undefined;
  modal: undefined;
  EditProfilePage: undefined;
};

export type LoginProps = NativeStackScreenProps<RootParamList, "LoginScreen">;

const RootStack = createNativeStackNavigator<RootParamList>();

const Router = () => {
  const profile = useProfile();
  return (
    <profileContext.Provider value={profile}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="ForgotDetailsScreen" component={ForgotDetailsScreen} />
          <RootStack.Screen name="SignupScreen" component={SignupScreen} />
          <RootStack.Screen
            name="FirstOnboardingScreen"
            component={FirstOnboardingScreen}
          />
          <RootStack.Screen
            name="SecondOnboardingScreen"
            component={SecondOnboardingScreen}
          />
          <RootStack.Screen
            name="ThirdOnboardingScreen"
            component={ThirdOnboardingScreen}
          />
          <RootStack.Screen name="main" component={TabNavigator} />
          <RootStack.Group screenOptions={{ presentation: "modal" }}>
            <RootStack.Screen name="modal" component={AddListingScreen} />
            <RootStack.Screen
              name="EditProfilePage"
              component={EditProfileScreen}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </profileContext.Provider>
  );
};

export default Router;

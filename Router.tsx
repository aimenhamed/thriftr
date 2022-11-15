import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";
import LoginScreen from "./screens/LoginScreen";
import ThriftingScreen from "./screens/ThriftingScreen";
import MatchesScreen from "./screens/MatchesScreen";
import AccountScreen from "./screens/AccountScreen";
import { styles } from "./screens/Matches.style";
import AddListingScreen from "./screens/AddListingScreen";
import { profileContext, useProfile } from "./profileContext";
import EditProfileScreen from "./screens/EditProfileScreen";
import Template from "./screens/template";
import ChatScreen from "./screens/ChatScreen";
import MessagesFilled from "./assets/MessagesOutline";
import MessagesOutline from "./assets/MessagesFilled";
import AccountFilled from "./assets/AccountFilled";
import AccountOutline from "./assets/AccountOutline";
import ThriftrFilled from "./assets/ThriftrFilled";
import ThriftrOutlined from "./assets/ThriftrOutlined";
import ItsAMatchScreen from "./screens/ItsAMatchScreen";
import FeedStackScreen from "./screens/FeedStackScreen";
import { Image, SafeAreaView } from "react-native";
import { Match } from "./types/match";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type MatchesParamList = {
  MatchesScreen: undefined;
  Chat: { userId: string; chatId: string; matched: Match };
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
const Stack = createNativeStackNavigator();

export type PageProps = MaterialTopTabScreenProps<TabsParamList>;
export type ChatPageProps = NativeStackScreenProps<MatchesParamList, "Chat">;

const MatchesStack = createNativeStackNavigator<MatchesParamList>();

const Router = () => {
  const profile = useProfile();
  return (
    <NavigationContainer>
      <profileContext.Provider value={profile}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="main" component={TabNavigator} />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="modal" component={AddListingScreen} />
            <Stack.Screen
              name="EditProfilePage"
              component={EditProfileScreen}
            />
          </Stack.Group>
        </Stack.Navigator>
      </profileContext.Provider>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  const { profile } = useContext(profileContext);
  const Main = (props: any) =>
    isAuthenticated ? (
      <FeedScreen
        logOut={() => setIsAuthenticated(false)}
        userId={userId}
        {...props}
      />
    ) : (
      <LoginScreen
        logIn={(uId: string) => {
          setIsAuthenticated(true);
          setUserId(uId);
        }}
        {...props}
      />
    );

  const Matches = (props: any) => <MatchesScreen {...props} userId={userId} />;
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
        initialParams={{ userId, chatId: "", matched: {} as Match }}
      />
    </MatchesStack.Navigator>
  );

  return (
      <Tab.Navigator
        initialRouteName="Thriftr"
        sceneContainerStyle={{
          backgroundColor: '#1F1F1F'
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
        >
          {(props: any) =>
            isAuthenticated ? (
              <FeedStackScreen
                logOut={() => setIsAuthenticated(false)}
                userId={userId}
                {...props}
              />
            ) : (
              <LoginScreen
                logIn={(uId: string) => {
                  setIsAuthenticated(true);
                  setUserId(uId);
                }}
                {...props}
              />
            )
          }
        </Tab.Screen>
        <Tab.Screen
        name="Account"
        children={() => <AccountScreen currentUser={true} profile={profile} />}
        options={{
          tabBarIcon: (props) =>
            props.focused ? <AccountFilled /> : <AccountOutline />,
        }}
      />
      </Tab.Navigator>
  );
};

export default Router;

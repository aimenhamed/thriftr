import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";

import LoginScreen from "./screens/LoginScreen";
import FeedScreen from "./screens/FeedScreen";
import MatchesScreen from "./screens/MatchesScreen";
import Template from "./screens/template";
import ChatScreen from "./screens/ChatScreen";
import { Image } from "react-native";
import { Match } from "./types/match";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type TabsParamList = {
  Thriftr: undefined;
  Matches: undefined;
  Feed: undefined;
  Account: undefined;
  Template: undefined;
};

type MatchesParamList = {
  MatchesScreen: undefined;
  Chat: { userId: string; chatId: string; matched: Match };
};

export type PageProps = MaterialTopTabScreenProps<TabsParamList, "Thriftr">;
export type ChatPageProps = NativeStackScreenProps<MatchesParamList, "Chat">;

const Tab = createMaterialTopTabNavigator<TabsParamList>();
const MatchesStack = createNativeStackNavigator<MatchesParamList>();

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");

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
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Thriftr"
        screenOptions={{
          swipeEnabled: false,
          tabBarShowLabel: false,
          tabBarItemStyle: { padding: 0, minHeight: 0 },
          tabBarContentContainerStyle: {
            justifyContent: "space-between",
            paddingTop: 40,
          },
          tabBarStyle: {
            backgroundColor: "#FFE600",
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
          component={MatchesStackScreen}
          options={{
            tabBarIcon: (props) => {
              return props.focused ? (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/FocusedChat.svg")}
                />
              ) : (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/Chat.svg")}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Thriftr"
          component={Main}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 91, height: 38 }}
                  source={require("./assets/Thriftr.svg")}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={Template}
          options={{
            tabBarIcon: (props) => {
              return props.focused ? (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/FocusedUser.svg")}
                />
              ) : (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/User.svg")}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

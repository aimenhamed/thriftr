import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";
import LoginScreen from "./screens/LoginScreen";
import ThriftingScreen from "./screens/ThriftingScreen";
import MatchesScreen from "./screens/MatchesScreen";
import Template from "./screens/template";
import { Image, SafeAreaView } from "react-native";
import MessagesFilled from "./assets/MessagesOutline";
import MessagesOutline from "./assets/MessagesFilled";
import AccountFilled from "./assets/AccountFilled";
import AccountOutline from "./assets/AccountOutline";
import ThriftrFilled from "./assets/ThriftrFilled";
import ThriftrOutlined from "./assets/ThriftrOutlined";
import ItsAMatchScreen from "./screens/ItsAMatchScreen";
import FeedStackScreen from "./screens/FeedStackScreen";

type TabsParamList = {
  Thriftr: any;
  Template: any;
  ThriftingScreen: any;
  ItsAMatchScreen: any;
};

export type PageProps = MaterialTopTabScreenProps<TabsParamList>;

const Tab = createMaterialTopTabNavigator();

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Entry"
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
            shadowColor: 'transparent',
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
          component={MatchesScreen}
          options={{
            tabBarIcon: (props) => props.focused ? <MessagesFilled /> : <MessagesOutline />
          }}
        />
        <Tab.Screen
          name="Thriftr"
          options={{
            tabBarIcon: (props) => props.focused ? <ThriftrFilled /> : <ThriftrOutlined />
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
          component={Template}
          options={{
            tabBarIcon: (props) => props.focused ? <AccountFilled /> : <AccountOutline />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

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
import { Image, SafeAreaView } from "react-native";
import MessagesFilled from "./assets/MessagesOutline";
import MessagesOutline from "./assets/MessagesFilled";
import AccountFilled from "./assets/AccountFilled";
import AccountOutline from "./assets/AccountOutline";
import ThriftrFilled from "./assets/ThriftrFilled";
import ThriftrOutlined from "./assets/ThriftrOutlined";

type TabsParamList = {
  Thriftr: undefined;
  Template: undefined;
};

export type PageProps = MaterialTopTabScreenProps<
  TabsParamList,
  "Thriftr",
  "Template"
>;

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
          component={(props: any) =>
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
            )
          }
          options={{
            tabBarIcon: (props) => props.focused ? <ThriftrFilled /> : <ThriftrOutlined />
          }}
        />
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

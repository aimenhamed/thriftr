import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";
import LoginScreen from "./screens/LoginScreen";
import FeedScreen from "./screens/FeedScreen";
import MatchesScreen from "./screens/MatchesScreen";
import { Image } from "react-native";
import AccountScreen from "./screens/AccountScreen";
import { styles } from "./screens/Matches.style";
import { Category, Gender, Size } from "./types/preferences";
import { Condition } from "./types/item";

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
        sceneContainerStyle={styles.container}
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
          component={MatchesScreen}
          options={{
            tabBarIcon: (props) => {
              return props.focused ? (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/FocusedChat.png")}
                />
              ) : (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/Chat.png")}
                />
              );
            },
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
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 91, height: 38 }}
                  source={require('./assets/Thriftr.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={() => (
            <AccountScreen
              currentUser={true}
              profile={{
                userId: "74aa9a46-aff3-4ecc-a817-f6697b18eb74",
                name: "itsViggo",
                image: require("./assets/test.png"),
                items: [
                  {
                    itemId: "0",
                    name: "item",
                    description: "description",
                    photos: [require("./assets/item1.png")],
                    color: "black",
                    type: Category.HOODIE,
                    size: Size.SMALL,
                    gender: Gender.MALE,
                    condition: Condition.NEW,
                  },
                  {
                    itemId: "1",
                    name: "item",
                    description: "description",
                    photos: [require("./assets/item2.png")],
                    color: "black",
                    type: Category.HOODIE,
                    size: Size.SMALL,
                    gender: Gender.MALE,
                    condition: Condition.NEW,
                  },
                ],
                matches: [],
                preferences: {},
              }}
            />
          )}
          options={{
            tabBarIcon: (props) => {
              return props.focused ? (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/FocusedUser.png")}
                />
              ) : (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/User.png")}
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

import { useContext, useState } from "react";
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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddListingScreen from "./screens/AddListingScreen";
import { profileContext, useProfile } from "./profileContext";

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
const Stack = createNativeStackNavigator();

const Router = () => {
  const profile = useProfile();
  return (
    <NavigationContainer>
      <profileContext.Provider value={profile}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="main" component={TabNavigator} />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="modal" component={AddListingScreen} />
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
  return (
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
        children={(props: any) =>
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
                source={require("./assets/Thriftr.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        children={() => <AccountScreen currentUser={true} profile={profile} />}
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
  );
};

export default Router;

import { useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";

import LoginScreen from "./screens/LoginScreen";
import FeedScreen from "./screens/FeedScreen";
import Template from "./screens/template";

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
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarContentContainerStyle: {
            width: "100%",
            flex: 0,
            justifyContent: "space-between",
            paddingTop: 40,
            backgroundColor: "#FFE600",
          },
        }}
      >
        <Tab.Screen name="Matches" component={Template} />
        {!isAuthenticated ? (
          <Tab.Screen name="Thriftr">
            {(props: any) => (
              <LoginScreen
                logIn={(uId: string) => {
                  setIsAuthenticated(true);
                  setUserId(uId);
                }}
                {...props}
              />
            )}
          </Tab.Screen>
        ) : (
          <Tab.Screen name="Thriftr">
            {(props: any) => (
              <FeedScreen
                logOut={() => setIsAuthenticated(false)}
                userId={userId}
                {...props}
              />
            )}
          </Tab.Screen>
        )}
        <Tab.Screen name="Account" component={Template} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

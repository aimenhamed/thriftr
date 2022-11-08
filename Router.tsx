import { useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";


import LoginScreen from "./screens/LoginScreen";
import FeedScreen from "./screens/FeedScreen";
import Template from "./screens/template";
import { Image } from 'react-native';

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
            paddingTop: 40,
          },
          tabBarStyle: {
            backgroundColor: "#FFE600",
          },
          tabBarIconStyle: {
            width: '100%',
            height: '100%'
          },
          tabBarIndicator: () => null,
          animationEnabled: false
        }}
      >
        <Tab.Screen name="Matches"
          component={Template}
          options = {{
            tabBarIcon: (props) => {
              return (
                props.focused ? <Image 
                style = {{ width: 24, height: 24}}
                source={require('./assets/FocusedChat.svg')} /> : 
                <Image 
                style = {{ width: 24, height: 24}}
                source={require('./assets/Chat.svg')} />
              )
            },
          }}/>
        {!isAuthenticated ? (
          <Tab.Screen name="Thriftr"          options = {{
            title: '',
            tabBarIcon: (props) => {
              return (
                <Image 
                style = {{ width: 91, height: 38}}
                source={require('./assets/Thriftr.svg')} />
              );
            },
            tabBarIconStyle: {
              width: '100%',
              height: '100%'
            }
          }}>
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
        <Tab.Screen name="Account" component={Template}           options = {{
            title: '',
            tabBarIcon: (props) => {
              return (
                props.focused ? <Image 
                style = {{ width: 24, height: 24}}
                source={require('./assets/FocusedUser.svg')} /> : 
                <Image 
                style = {{ width: 24, height: 24}}
                source={require('./assets/User.svg')} />
              )
            },
            tabBarIconStyle: {
              width: '100%',
              height: '100%',
            }
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

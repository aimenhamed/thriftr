import { MaterialTopTabNavigationEventMap, MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";
import { ParamListBase, RouteConfig, TabNavigationState, TypedNavigator } from "@react-navigation/native"
import Template from "../screens/template";
import { ReactNode } from "react";

type Props = {
    Screen: <RouteName extends string>(_: RouteConfig<ParamListBase, RouteName, TabNavigationState<ParamListBase>, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap>) => null;
    focusedImage: ReactNode,
    unfocusedImage: ReactNode
}

export default function NavBarIcon({Screen, focusedImage, unfocusedImage}: Props) {
    return <Screen name="Matches"
    component={Template}
    options = {{
      title: '',
      tabBarIcon: (props) => props.focused ? focusedImage : unfocusedImage,
      tabBarIconStyle: {
        width: '100%',
        height: '100%'
      }
    }}
    />
}
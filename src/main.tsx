import React from "react";
import { Home } from "./views/home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./views/login/Login";

const Tab = createBottomTabNavigator();

export default function Main(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="login" component={Login} />
    </Tab.Navigator>
  );
}

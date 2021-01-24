import * as React from "react";
import { Home } from "./views/home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./views/login/Login";
import { TabBar } from "./components/tabbar/TabBar";
import Movies from "./views/movies/Movies";

const Tab = createBottomTabNavigator();

export default function Main(): JSX.Element {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Login} />
      <Tab.Screen name="Games" component={Login} />
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Settings" component={Login} />
    </Tab.Navigator>
  );
}

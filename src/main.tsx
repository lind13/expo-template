import * as React from "react";
import { Home } from "./views/home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar } from "./components/tabbar/TabBar";
import { EmptyView } from "./views/EmptyView";

const Tab = createBottomTabNavigator();

export default function Main(): JSX.Element {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Example" component={EmptyView} />
      <Tab.Screen name="Settings" component={EmptyView} />
    </Tab.Navigator>
  );
}

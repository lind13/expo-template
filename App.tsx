import React from "react";
import Main from "./src/main";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedTheme } from "./src/ConnectedTheme";
import { NavigationContainer } from "@react-navigation/native";

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ConnectedTheme>
          <Main />
        </ConnectedTheme>
      </Provider>
    </NavigationContainer>
  );
}

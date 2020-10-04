import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { DefaultTheme } from "./common/theme/defaultTheme";
import { DarkTheme } from "./common/theme/darkTheme";
import { connect } from "react-redux";
import {
  mapThemeStateToProps,
  ThemeString,
} from "./reducers/Globals/Theme/themeReducer";

type ThemeProps = ReturnType<typeof mapThemeStateToProps>;

const getThemeObj = (themeStr: ThemeString) => {
  switch (themeStr) {
    case "light":
      return DefaultTheme;
    case "dark":
      return DarkTheme;
    default:
      return DefaultTheme;
  }
};

const Theme: React.FunctionComponent<ThemeProps> = (props): JSX.Element => {
  const [theme, setTheme] = useState<ThemeString>("light");

  useEffect(() => {
    setTheme(props.theme);
  }, [props.theme]);

  return (
    <ThemeProvider theme={getThemeObj(theme)}>{props.children}</ThemeProvider>
  );
};

export const ConnectedTheme = connect(mapThemeStateToProps)(Theme);

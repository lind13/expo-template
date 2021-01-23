import Theme from "./theme";
import { ThemeColors } from "./colors";

export const DarkTheme: Theme = {
  Main: {
    backgroundColor: ThemeColors.black,
    textColor: ThemeColors.green,
    secondaryTextColor: ThemeColors.white,
  },
  Button: {
    backgroundColor: ThemeColors.green,
    textColor: ThemeColors.black,
    border: ThemeColors.green,
    shadow: "none",
  },
  Card: {
    backgroundColor: ThemeColors.black,
    textColor: ThemeColors.white,
    secondaryTextColor: ThemeColors.green,
    border: ThemeColors.black,
  },
  TabBar: {
    backgroundColor: ThemeColors.green,
    textColor: ThemeColors.white,
    active: ThemeColors.black,
    activeText: ThemeColors.green
  }
};

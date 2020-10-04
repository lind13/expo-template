import Theme from "./theme";
import { ThemeColors } from "./colors";

export const DefaultTheme: Theme = {
  Main: {
    backgroundColor: ThemeColors.green,
    textColor: ThemeColors.white,
    secondaryTextColor: ThemeColors.black,
  },
  Button: {
    backgroundColor: ThemeColors.white,
    textColor: ThemeColors.green,
    border: ThemeColors.white,
    shadow: "none",
  },
  Card: {
    backGroundColor: ThemeColors.green,
    textColor: ThemeColors.white,
    secondaryTextColor: ThemeColors.black,
    border: ThemeColors.green,
  },
};

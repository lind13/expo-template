import * as React from "react";
import { StyleProp, TouchableOpacity, ViewStyle, Animated } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ThemeColors } from "../../common/theme/colors";

type LikeProps = {
  size: number;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const LikeIcon: React.FunctionComponent<LikeProps> = (props) => {
  const handlePress = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <TouchableOpacity onPress={props.onClick} style={props.style}>
      <Animated.View>
        <SimpleLineIcons
          name="like"
          size={props.size}
          color={ThemeColors.green}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

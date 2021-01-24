import * as React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ThemeColors } from "../../common/theme/colors";

type LikeProps = {
  size: number;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const DislikeIcon: React.FunctionComponent<LikeProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={props.style}>
      <SimpleLineIcons
        name="dislike"
        size={props.size}
        color={ThemeColors.green}
      />
    </TouchableOpacity>
  );
};

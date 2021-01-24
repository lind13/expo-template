import * as React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import {
  MovieCard,
  CARD_HEIGHT as DEFAULT_CARD_HEIGHT,
} from "../cards/MovieCard";

export const MARGIN = 16;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;

const { height: wHeight } = Dimensions.get("window");
const height = wHeight;
const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: "center",
  },
});

interface AnimatedMovieCardProps {
  y: Animated.Value;
  index: number;
  text?: string;
}

const AnimatedMovieCard: React.FunctionComponent<AnimatedMovieCardProps> = (
  props
) => {
  const position = Animated.subtract(props.index * CARD_HEIGHT, props.y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      props.y,
      props.y.interpolate({
        inputRange: [0, 0.00001 + props.index * CARD_HEIGHT],
        outputRange: [0, -props.index * CARD_HEIGHT],
        extrapolateRight: "clamp",
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: "clamp",
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
  return (
    <Animated.View
      style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
      key={props.index}
    >
      <MovieCard text={props.text} />
    </Animated.View>
  );
};

export default AnimatedMovieCard;

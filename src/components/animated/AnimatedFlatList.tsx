import * as React from "react";
import { Animated, FlatList } from "react-native";
import AnimatedMovieCard from "./AnimatedMovieCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const cards: string[] = [
  "Lord of the Rings",
  "Star Wars",
  "Gladiator",
  "Ondskan",
  "Seal TEAM",
  "Cars",
  "Toy Story 4",
  "Harry Potter",
  "The Witcher",
  "Game of Thrones",
  "Billions",
  "Sunes Sommar",
  "Sällskapsresan",
  "Taken",
  "Top Gun",
  "Mars",
  "Transformers",
  "Avengers",
  "Spiderman",
  "Joker",
];

const MovieCardList = () => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });

  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={cards}
      renderItem={(item) => (
        <AnimatedMovieCard
          index={item.index}
          y={y}
          text={item.item as string}
        />
      )}
      //   keyExtractor={({ item, index}) => index.toString()}
      {...{ onScroll }}
      style={{
        width: "100%",
      }}
    />
  );
};

export default MovieCardList;

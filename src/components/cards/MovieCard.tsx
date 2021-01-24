import * as React from "react";
import styled from "styled-components/native";
import { LikeIcon } from "../icons/like";
import { DislikeIcon } from "../icons/dislike";
import { Dimensions } from "react-native";
import { shadow } from "../../common/style/shadow";

const { height, width } = Dimensions.get("window");
// const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = height * 0.33 - 16 * 6;

const Container = styled.View`
  height: ${CARD_HEIGHT};
  width: ${CARD_WIDTH};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.Card.backgroundColor};
`;

const StyledText = styled.Text`
  font-weight: 300;
  color: ${(props) => props.theme.Button.textColor};
  text-align: center;
`;

type MovieCardProps = {
  text?: string;
  onLike?: () => void;
  onDislike?: () => void;
};

export const MovieCard: React.FunctionComponent<MovieCardProps> = (props) => {
  return (
    <Container style={shadow.boxShadow}>
      <LikeIcon
        size={24}
        style={{ position: "absolute", bottom: 8, right: 40 }}
      />
      <DislikeIcon
        size={24}
        style={{ position: "absolute", bottom: 8, right: 8 }}
      />
      <StyledText>{props.text}</StyledText>
    </Container>
  );
};

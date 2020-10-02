import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const StyledButton = styled(TouchableOpacity)`
  height: 40px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  border-radius: 5px;
  background-color: white;
`;

const StyledText = styled(Text)`
  text-decoration: none;
  font-weight: 300;
  color: #4bd083;
  text-align: center;
`;

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <StyledButton onPress={props.onPress}>
      <StyledText>{props.title}</StyledText>
    </StyledButton>
  );
};

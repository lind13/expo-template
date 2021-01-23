import React from "react";
import styled from "styled-components/native";
import { shadow } from "../../common/style/shadow";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const StyledButton = styled.TouchableOpacity`
  height: 40px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.Button.backgroundColor};
`;

const StyledText = styled.Text`
  text-decoration: none;
  font-weight: 300;
  color: ${(props) => props.theme.Button.textColor};
  text-align: center;
`;

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <StyledButton onPress={props.onPress} style={shadow.boxShadow}>
      <StyledText>{props.title}</StyledText>
    </StyledButton>
  );
};

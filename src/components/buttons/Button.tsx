import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

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
    <StyledButton onPress={props.onPress} style={styles.boxShadow}>
      <StyledText>{props.title}</StyledText>
    </StyledButton>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

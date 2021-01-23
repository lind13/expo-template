import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

const _StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${(props) => props.theme.Main.backgroundColor};
  flex: 1;
`;

export const StyledSafeAreaView: React.FunctionComponent = (
  props
): JSX.Element => {
  return (
    <_StyledSafeAreaView>
      <StatusBar style="light" backgroundColor="#4bd083" />
      {props.children}
    </_StyledSafeAreaView>
  );
};

import React from "react";
import { StatusBar } from "expo-status-bar";
import { Home } from "./views/home/Home";
import styled from "styled-components/native";

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${(props) => props.theme.Main.backgroundColor};
  flex: 1;
`;

export default function Main(): JSX.Element {
  return (
    <StyledSafeAreaView>
      <StatusBar style="light" backgroundColor="#4bd083" />
      <Home />
    </StyledSafeAreaView>
  );
}

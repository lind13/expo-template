import * as React from "react";
import { Text } from "react-native";
import { StyledSafeAreaView } from "../components/StyledSafeAreaView";

export const EmptyView: React.FunctionComponent = (): JSX.Element => {
  return (
    <StyledSafeAreaView>
      <Text>Empty View</Text>
    </StyledSafeAreaView>
  );
};

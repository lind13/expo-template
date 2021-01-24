import * as React from "react";
import styled from "styled-components/native";
import MovieCardList from "../../components/animated/AnimatedFlatList";

const Container = styled.View`
  background: ${(props) => props.theme.Main.backgroundColor};
  flex: 1;
`;

export default function Movies(): JSX.Element {
  return (
    <Container>
      <MovieCardList />
    </Container>
  );
}

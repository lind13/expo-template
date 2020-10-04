import React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";

export default function Login(): JSX.Element {
  return (
    <View>
      <Text>Login View</Text>
      <Link to={"/"}>
        <Text>Home</Text>
      </Link>
    </View>
  );
}

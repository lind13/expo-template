import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Button } from "./components/buttons/Button";
import Login from "./views/login/Login";
import { StatusBar } from "expo-status-bar";

export default function Main(): JSX.Element {
  const { t } = useTranslation();

  const [number, setNumber] = useState<number>(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Movie Finder</Text>
      <StatusBar style="light" backgroundColor="#4bd083" />
      <View style={styles.btnContainer}>
        <Text style={styles.text}>{number}</Text>
        <Button title={t("STR_INCREMENT")} onPress={increment} />
        <Button title={t("STR_DECREMENT")} onPress={decrement} />
      </View>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4bd083",
    flex: 1,
  },
  btnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 100,
    color: "white",
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },
});

import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/buttons/Button";
import { mapDispatchToProps } from "../../reducers/utils";
import { connect } from "react-redux";
import { setTheme } from "../../reducers/Globals/Theme/actions/actions";
import { mapThemeStateToProps } from "../../reducers/Globals/Theme/themeReducer";
import { StyledSafeAreaView } from "../../components/StyledSafeAreaView";

type HomeProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapThemeStateToProps>;

const _Home: React.FunctionComponent<HomeProps> = (props): JSX.Element => {
  const { t } = useTranslation();
  const [number, setNumber] = React.useState<number>(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  const changeTheme = () => {
    const newTheme = props.theme === "light" ? "dark" : "light";
    props.dispatch(setTheme(newTheme));
  };

  return (
    <StyledSafeAreaView>
      <Text style={styles.header}>Movie Finder</Text>
      <View style={styles.btnContainer}>
        <Text style={styles.text}>{number}</Text>
        <Button title={t("STR_INCREMENT")} onPress={increment} />
        <Button title={t("STR_DECREMENT")} onPress={decrement} />
        <Button title={"Toggle theme"} onPress={changeTheme} />
      </View>
    </StyledSafeAreaView>
  );
};

export const Home = connect(mapThemeStateToProps, mapDispatchToProps)(_Home);

const styles = StyleSheet.create({
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

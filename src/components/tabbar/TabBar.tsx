import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { shadow } from "../../common/style/shadow";

const TabBarContainer = styled.View<{columns: number}>`
    position: absolute;
    bottom: 5%;
    left: 5%;
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.TabBar.backgroundColor};
    border-radius: 8px;
    padding: 2%;
`;

const TabBarButton = styled.TouchableOpacity<{active: boolean}>`
    flex: 1;
    height: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.active ? props.theme.TabBar.active : props.theme.TabBar.backgroundColor};
`;

const TabBarText = styled.Text<{active: boolean}>`
    color: ${props => props.active ? props.theme.TabBar.activeText : props.theme.TabBar.textColor};
`;

export const TabBar: React.FunctionComponent<BottomTabBarProps> = (props) =>  {
  return (

    <TabBarContainer style={shadow.boxShadow} columns={props.state.routes.length}>
      {props.state.routes.map((route, index) => {
        const { options } = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            active={isFocused}
          >
            <TabBarText active={isFocused}>
              {label}
            </TabBarText>
          </TabBarButton>
        );
      })}
    </TabBarContainer>
  );
}
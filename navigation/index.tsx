// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import React from "react-native";
import {
	DarkTheme,
	DefaultTheme,
	getFocusedRouteNameFromRoute,
	NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import HomeBottomTabNavigator, {
	AddActivityStackNavigator,
	HomeStackNavigator,
} from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import LoginScreen from "../screens/LoginScreen";

export default function Navigation({ colorScheme }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator();

function RootNavigator() {
	return (
		<RootStack.Navigator
			screenOptions={{
				headerShadowVisible: false,
				headerStyle: {
					backgroundColor: "#fff",
				},
			}}
		>
			<RootStack.Screen
				name="Root"
				component={HomeStackNavigator}
				options={{ headerShown: false }}
			/>
			<RootStack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
			<RootStack.Screen
				name="Login"
				component={LoginScreen}
				options={{ title: "Login" }}
			/>
		</RootStack.Navigator>
	);
}

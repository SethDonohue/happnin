// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Platform, useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import HomeTabScreen from "../screens/HomeTabScreen";
import AddActivityTabScreen from "../screens/AddActivityTabScreen";
import ProfileTabScreen from "../screens/ProfileTabScreen";
import ActivityDetailScreen from "../screens/ActivityDetailScreen";
import AddActivityPeopleScreen from "../screens/AddActivityPeopleScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="HomeTab"
			screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
		>
			<BottomTab.Screen
				name="HomeTab"
				component={HomeTabNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-code" color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name="AddActivityTab"
				component={AddActivityTabNavigator}
				options={{
					title: "Add Activity",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-code" color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name="ProfileTab"
				component={ProfileTabNavigator}
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-code" color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeTabStack = createStackNavigator();

function HomeTabNavigator() {
	return (
		<HomeTabStack.Navigator>
			<HomeTabStack.Screen
				name="HomeTabScreen"
				component={HomeTabScreen}
				options={{ headerShown: false }}
			/>
			<HomeTabStack.Screen
				name="ActivityDetail"
				component={ActivityDetailScreen}
				options={{ title: " ", headerBackTitle: " " }}
			/>
		</HomeTabStack.Navigator>
	);
}

const AddActivityTabStack = createStackNavigator();

function AddActivityTabNavigator() {
	return (
		<AddActivityTabStack.Navigator>
			<AddActivityTabStack.Screen
				name="AddActivityScreen"
				component={AddActivityTabScreen}
				options={{ title: "Add a Happnin'" }}
			/>
			<AddActivityTabStack.Screen
				name="AddActivityPeopleScreen"
				component={AddActivityPeopleScreen}
				options={{
					title: Platform.OS === "ios" ? null : "Add a Happnin'",
					headerBackTitle: "Add a Happnin'",
				}}
			/>
		</AddActivityTabStack.Navigator>
	);
}

const ProfileTabStack = createStackNavigator();

function ProfileTabNavigator() {
	return (
		<ProfileTabStack.Navigator>
			<ProfileTabStack.Screen
				name="Profile"
				component={ProfileTabScreen}
				options={{ headerShown: false }}
			/>
		</ProfileTabStack.Navigator>
	);
}

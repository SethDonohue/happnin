// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import { MaterialIcons } from "@expo/vector-icons/";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Platform, useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import AddActivityTabScreen from "../screens/AddActivityTabScreen";
import ProfileTabScreen from "../screens/ProfileTabScreen";
import ActivityDetailScreen from "../screens/ActivityDetailScreen";
import AddActivityPeopleScreen from "../screens/AddActivityPeopleScreen";

const HomeBottomTab = createBottomTabNavigator();

export default function HomeBottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<HomeBottomTab.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
				tabBarStyle: { paddingTop: 10, height: 100 },
			}}
		>
			<HomeBottomTab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerShown: false,
					title: "",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="home-filled" color={color} />
					),
				}}
			/>
			<HomeBottomTab.Screen
				name="AddActivityTab"
				component={AddActivityStackNavigator}
				options={{
					title: "",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="add-box" color={color} />
					),
					tabBarStyle: { display: "none" },
				}}
			/>
			<HomeBottomTab.Screen
				name="ProfileTab"
				component={ProfileTabNavigator}
				options={{
					title: "",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="account-circle" color={color} />
					),
				}}
			/>
		</HomeBottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
	return <MaterialIcons size={40} style={{ marginBottom: -10 }} {...props} />;
}

function MediumIcon(props) {
	return <MaterialIcons size={24} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

export function HomeStackNavigator() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="HomeTabScreen"
				component={HomeBottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<HomeStack.Screen
				name="AddActivityStackNavigator"
				component={AddActivityStackNavigator}
				options={{ headerShown: false }}
			/>

			<HomeStack.Screen
				name="ActivityDetailsScreen"
				component={ActivityDetailScreen}
				options={{
					title: " ",
					headerBackTitle: " ",
					headerShadowVisible: false,
					headerTransparent: true,
				}}
			/>
		</HomeStack.Navigator>
	);
}

const AddActivityStack = createStackNavigator();

export function AddActivityStackNavigator({ navigation }) {
	return (
		<AddActivityStack.Navigator>
			<AddActivityStack.Screen
				name="AddActivityScreen"
				component={AddActivityTabScreen}
				options={{
					headerBackTitle: "Home",
					title: "Add a Happnin'",
					headerLeft: (props) => (
						<MediumIcon
							style={{ marginHorizontal: 10 }}
							name={Platform.OS === "ios" ? "chevron-left" : "arrow-back"}
							color={props.tintColor}
							onPress={() => {
								navigation.goBack();
							}}
						/>
					),
				}}
			/>
			<AddActivityStack.Screen
				name="AddActivityPeopleScreen"
				component={AddActivityPeopleScreen}
				options={{
					title: "Add People",
					headerBackTitle: " ",
				}}
			/>
		</AddActivityStack.Navigator>
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

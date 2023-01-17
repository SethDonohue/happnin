import React, {
	FlatList,
	Image,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { ActivityCard } from "../components/ActivityCard";
import { CardSection } from "../components/CardSection";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const testDetails = {
	title: "Title",
	time: "Today - 12:30pm",
	author: "Ellie J.",
};

const testDetailsFactory = Array(3).fill(testDetails);

const testSectionsByDate = [
	{
		title: "Today",
		children: testDetailsFactory,
	},
	{
		title: "Tomorrow",
		children: testDetailsFactory,
	},
	{
		title: "This Week",
		children: testDetailsFactory,
	},
];

export default function HomeScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			{/* <Text style={styles.title}>Home</Text> */}

			{/* TODO: ADD List of events Here with links to details screen */}
			<View style={styles.content}>
				<FlatList
					data={testSectionsByDate}
					renderItem={({ item }) => <CardSection data={item} />}
				></FlatList>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	content: {
		alignSelf: "stretch",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});

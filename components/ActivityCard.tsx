import React, { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";

export const ActivityCard = ({ children, data }) => {
	return (
		<View style={styles.container}>
			{children}
			<View style={styles.dataContainer}>
				<Text>{data.title}</Text>
				<Text>{data.time}</Text>
				<Text>{data.author}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#f2f5f7",
		borderWidth: 1,
		padding: 15,
		margin: 20,
		marginTop: 10,
		marginBottom: 0,
		borderColor: "#999",
		...Platform.select({
			android: {
				elevation: 1,
			},
			default: {
				shadowColor: "rgba(0,0,0, .2)",
				shadowOffset: { height: 0, width: 0 },
				shadowOpacity: 1,
				shadowRadius: 1,
			},
		}),
	},
	dataContainer: {
		padding: 5,
		marginHorizontal: 5,
		backgroundColor: "transparent",
		justifyContent: "center",
		alignContent: "center",
	},
});

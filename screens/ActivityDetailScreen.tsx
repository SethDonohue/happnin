import React, { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ActivityDetailScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Activity Detail</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

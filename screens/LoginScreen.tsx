import React, { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TouchableOpacity onPress={() => navigation.navigate("HomeTab")}>
				Login Here
			</TouchableOpacity>
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

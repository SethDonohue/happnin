import React, { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { defaultScreenStyles } from "../constants/styles";

export default function ProfileTabScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Profile</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	...defaultScreenStyles,
});

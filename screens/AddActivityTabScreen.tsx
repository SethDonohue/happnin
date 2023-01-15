import React, { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { defaultScreenStyles } from "../constants/styles";

export default function AddActivityTabScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Add Activity</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<TouchableOpacity
				onPress={() => navigation.navigate("AddActivityPeopleScreen")}
			>
				<Text lightColor={"#2f95dc"}>Go to Add People</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	...defaultScreenStyles,
});

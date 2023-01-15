import React, { FlatList, Image, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { ActivityCard } from "./ActivityCard";

export const CardSection = ({ data }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{data.title}</Text>
			<FlatList
				data={data.children}
				renderItem={({ item }) => (
					<ActivityCard data={item}>
						<Image
							style={{ height: 80, width: 80 }}
							source={{ uri: "https://via.placeholder.com/150" }}
						></Image>
					</ActivityCard>
				)}
			></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginHorizontal: 20,
	},
});

import React, {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { buttonStyles } from "../components/Themed";

import { Button } from "../components/Themed";

export default function ActivityDetailScreen({ route, navigation }) {
	const { title, author, time } = route.params;
	console.log({ route });

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: "https://via.placeholder.com/350" }}
			></Image>
			<View style={styles.mainDetailsContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.title}>{time}</Text>
				<View style={styles.authorContainer}>
					<Image
						style={{ width: 40, height: 40, borderRadius: 20 }}
						source={{ uri: "https://via.placeholder.com/40" }}
					/>
					<Text style={styles.author}>{author}</Text>
					<Button type="outline" title="Message" />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		width: "100%",
	},
	image: {
		// TODO: Make this image stretch width while maintaining aspect ratio
		width: "100%",
		height: 350,
	},
	mainDetailsContainer: {
		display: "flex",
		width: "100%",
		padding: 25,
	},
	authorContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		marginTop: 10,
		// borderColor: "green",
		// borderWidth: 1,
	},
	author: {
		fontSize: 20,
		fontWeight: "bold",
		marginRight: "auto",
		marginLeft: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

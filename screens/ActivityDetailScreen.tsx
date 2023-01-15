import React, {
	Button,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { buttonStyles } from "../components/Themed";

// import { Button } from "../components/Themed";

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
					<Text style={styles.title}>{author}</Text>
					<Button title="Message" color={buttonStyles.backgroundColor} />
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
		width: "120%",
		height: 350,
	},
	mainDetailsContainer: {
		display: "flex",
	},
	authorContainer: {
		display: "flex",
		flexDirection: "row",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

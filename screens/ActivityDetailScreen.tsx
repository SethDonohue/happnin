import React, {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	Dimensions,
} from "react-native";

import { Button } from "../components/Themed";

export default function ActivityDetailScreen({ route, navigation }) {
	const { title, author, time } = route.params;

	//TODO: ADD useEffect or custom hook here to get the most recent data for this activity's details.

	const mainActionMessage = "Join (2 open spots)";

	return (
		<View style={styles.container}>
			<ScrollView>
				<Image
					style={styles.image}
					source={{ uri: "https://via.placeholder.com/300" }}
				></Image>
				<View style={styles.contentContainer}>
					<View style={styles.primaryDetails}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.time}>{time}</Text>
						<View style={styles.authorContainer}>
							<Image
								style={{ width: 40, height: 40, borderRadius: 20 }}
								source={{ uri: "https://via.placeholder.com/40" }}
							/>
							<Text style={styles.author}>{author}</Text>
							<Button type="outline" title="Message" />
						</View>
					</View>
					<View style={styles.secondaryDetails}>
						<View style={styles.miscInfo}></View>
						<View style={styles.miscInfo}></View>
						<View style={styles.miscInfo}></View>
						<View style={styles.mapView}></View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.footerContainer}>
				<Button style={styles.mainAction} title={mainActionMessage} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		width: "100%",
		paddingBottom: 20,
	},
	image: {
		// TODO: Make this image stretch width while maintaining aspect ratio???
		width: "100%",
		height: 300,
	},
	contentContainer: {
		display: "flex",
		width: "100%",
		padding: 25,
		paddingTop: 20,
		paddingBottom: 0,
		marginBottom: 20,
	},
	primaryDetails: { marginBottom: 20 },
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	time: {
		fontSize: 20,
		fontWeight: "bold",
	},
	authorContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		marginTop: 10,
	},
	author: {
		fontSize: 20,
		fontWeight: "bold",
		marginRight: "auto",
		marginLeft: 5,
	},
	secondaryDetails: {
		display: "flex",
		alignContent: "center",
	},
	miscInfo: {
		marginBottom: 10,
		width: 250,
		height: 30,
		backgroundColor: "lightgray",
	},
	mapView: {
		width: "100%",
		height: 100,
		marginTop: 20,
		backgroundColor: "gray",
	},
	footerContainer: {
		display: "flex",
		marginTop: "auto",
		backgroundColor: "#fff",
		alignContent: "center",
		width: "100%",
		paddingTop: 20,
		paddingBottom: 20,
	},
	mainAction: {
		marginHorizontal: 50,
		paddingVertical: 10,
	},
});

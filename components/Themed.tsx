// Learn more about Light and Dark modes:
// https://docs.expo.dev/guides/color-schemes/
import React, {
	StyleSheet,
	Text as DefaultText,
	useColorScheme,
	View as DefaultView,
	TouchableOpacity,
} from "react-native";

import Colors from "../constants/Colors";

export function useThemeColor(props, colorName) {
	const theme = useColorScheme();
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	} else {
		return Colors[theme][colorName];
	}
}

export function Text(props) {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props) {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"background"
	);

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const outlineButtonStyles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		borderColor: "rgba(101,87,245, 0.5)",
		borderWidth: 1,
		padding: 8,
		paddingHorizontal: 20,
		borderRadius: 4,
	},
	text: {
		fontSize: 18,
		color: "rgb(101,87,245)",
		alignSelf: "center",
	},
});

export const solidButtonStyles = StyleSheet.create({
	container: {
		backgroundColor: "rgb(101,87,245)",
		borderColor: "rgb(101,87,245)",
		borderWidth: 1,
		padding: 8,
		paddingHorizontal: 20,
		borderRadius: 4,
	},
	text: {
		fontSize: 18,
		color: "#fff",
		alignSelf: "center",
	},
});

export function Button(props) {
	const { style, type, lightColor, darkColor, title, ...otherProps } = props;
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"background"
	);

	let styles = solidButtonStyles;
	if (type) {
		switch (props.type) {
			case "outline":
				styles = outlineButtonStyles;
		}
	}

	return (
		<TouchableOpacity style={[style, styles.container]} {...otherProps}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

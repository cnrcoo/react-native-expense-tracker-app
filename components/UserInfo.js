import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

export default function UserInfo({ name }) {
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<View style={styles.imageContainer}>
					<Image
						source={require('../assets/images/pp.jpg')}
						resizeMode='contain'
						style={styles.image}
					/>
				</View>
				<Text style={styles.text}>Hello, {name}!</Text>
			</View>

			<TouchableOpacity style={styles.rightContainer}>
				<Image
					source={require('../assets/icons/toOnboard.png')}
					resizeMode='contain'
					style={styles.icon}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: width * 0.86,
		height: 80,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	leftContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	imageContainer: {
		width: 40,
		height: 40,
		marginRight: 8,
	},

	image: { width: '100%', height: '100%', borderRadius: 60 },

	text: { fontSize: 13, fontWeight: 'bold', letterSpacing: 0.2 },

	rightContainer: { width: 30, height: 30 },

	icon: { width: '90%', height: '90%' },
});

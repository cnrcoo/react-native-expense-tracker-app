import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	ImageBackground,
	Image,
} from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');

export default function UserCCard({ name, surname, cardNumber, expDate }) {
	const [loaded, error] = useFonts({
		qsBold: require('../assets/fonts/Quicksand-Bold.otf'),
	});
	if (!loaded) return undefined;

	return (
		<>
			<View style={styles.cardContainer}>
				<ImageBackground
					source={require('../assets/images/bg6-min.jpg')}
					resizeMode='cover'
					style={{ width: '100%', height: '100%' }}
					borderRadius={20}
				>
					<View style={styles.innerCard}>
						<View style={styles.top}>
							<View style={{ width: 30, height: 30 }}>
								<Image
									source={require('../assets/icons/chip.png')}
									style={styles.img}
									resizeMode='contain'
								/>
							</View>
							<View style={{ width: 30, height: 30, marginTop: 4 }}>
								<Image
									source={require('../assets/icons/contactless.png')}
									style={styles.img}
									resizeMode='contain'
								/>
							</View>
						</View>

						<View style={{ marginBottom: 4 }}>
							<View>
								<Text style={styles.cardNumber}>{cardNumber}</Text>
							</View>

							<View style={styles.horizontalLine} />

							<View style={styles.nameDate}>
								<View style={styles.nameContainer}>
									<Text style={styles.name}>
										{name} {surname}
									</Text>
								</View>

								<View style={styles.dateContainer}>
									<Text style={styles.date}>{expDate}</Text>
								</View>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		width: width * 0.86,
		height: 190,
		backgroundColor: 'gray',
		borderRadius: 26,
	},

	innerCard: {
		flex: 1,
		paddingHorizontal: 32,
		paddingTop: 24,
		paddingBottom: 16,
		justifyContent: 'space-between',
	},

	img: {
		width: '100%',
		height: '100%',
		tintColor: '#dbdbdb',
	},

	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	cardNumber: {
		color: '#ffffffee',
		fontSize: 20,
		// fontWeight: '900',
		// letterSpacing: 0.75,
		fontFamily: 'qsBold',
	},

	horizontalLine: {
		width: '100%',
		borderBottomWidth: 2,
		borderBottomColor: '#73767a66',
		marginVertical: 8,
	},

	nameDate: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	name: {
		color: '#ffffffee',
		fontSize: 14,
		// fontWeight: '600',
		letterSpacing: 0.22,
		fontFamily: 'qsBold',
	},

	date: {
		color: '#ffffffee',
		fontSize: 12,
		// fontWeight: '600',
		// letterSpacing: 1,
		fontFamily: 'qsBold',
	},
});

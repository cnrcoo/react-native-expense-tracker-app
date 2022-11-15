import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import React from 'react';
import { COLOR_PALETTE } from '../COLOR_PALETTE';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');

export default function TotalBalance() {
	const [loaded, error] = useFonts({
		qsBold: require('../assets/fonts/Quicksand-Bold.otf'),
	});
	if (!loaded) return undefined;

	return (
		<>
			<View style={styles.balanceContainer}>
				<TouchableOpacity>
					<Image
						source={require('../assets/icons/next.png')}
						resizeMode='contain'
						style={[styles.icons, { transform: [{ rotate: '180deg' }] }]}
					/>
				</TouchableOpacity>

				<View style={{ alignItems: 'center' }}>
					<Text style={styles.titleText}>TOTAL BALANCE</Text>
					<Text style={styles.balanceText}>$31,235.25</Text>
				</View>

				<TouchableOpacity>
					<Image
						source={require('../assets/icons/dots.png')}
						resizeMode='contain'
						style={styles.icons}
					/>
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	balanceContainer: {
		flex: 0.18,
		paddingHorizontal: width * 0.07,
		backgroundColor: COLOR_PALETTE.primary_darkGray,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	icons: {
		width: 26,
		height: 26,
		tintColor: 'white',
	},

	titleText: {
		color: 'gray',
		fontSize: 9,
		fontWeight: '700',
		marginTop: 4,
	},

	balanceText: {
		color: 'white',
		fontSize: 24,
		letterSpacing: 0.22,
		fontFamily: 'qsBold',
	},

	bottomContainer: {
		flex: 1,
		paddingHorizontal: width * 0.07,
		backgroundColor: COLOR_PALETTE.primary_backGround,
		borderTopLeftRadius: 36,
		borderTopRightRadius: 36,
	},
});

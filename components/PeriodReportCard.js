import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import { COLOR_PALETTE } from '../COLOR_PALETTE';
import shopping from '../assets/txIcons/shopping.png';
import flight from '../assets/txIcons/flight.png';
import medical from '../assets/txIcons/medical.png';
import restaurant from '../assets/txIcons/restaurant.png';

const { width } = Dimensions.get('window');

const getIcon = (category) => {
	if (category == 'Food') {
		return restaurant;
	} else if (category == 'Transportation') {
		return flight;
	} else if (category == 'Medical') {
		return medical;
	} else {
		return shopping;
	}
};

export default function PeriodReportCard({ amount, category, percentage }) {
	return (
		<View style={styles.container}>
			<View>
				<Image
					source={getIcon(category)}
					resizeMode='contain'
					style={{ width: 22, height: 22, marginLeft: 2 }}
				/>
				<Text style={styles.textBold}>{amount}</Text>
				<Text style={styles.textLight}>{category}</Text>
			</View>

			<View>
				<Text style={styles.textBold}>{percentage}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: width * 0.42 - 4,
		height: 112,
		borderRadius: 14,
		marginBottom: 16,
		paddingHorizontal: 10,
		backgroundColor: COLOR_PALETTE.primary_white,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	textBold: { fontWeight: '900', marginTop: 4, marginBottom: 2 },

	textLight: {
		color: COLOR_PALETTE.primary_lightGray,
		fontSize: 10,
		fontWeight: '700',
	},
});

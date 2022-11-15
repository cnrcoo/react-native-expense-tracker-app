import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native';
import React from 'react';
import { COLOR_PALETTE } from '../COLOR_PALETTE';
import PeriodReportCard from './PeriodReportCard';
import { PERIOD_SPENDINGS } from '../DUMMY_DATA';

const { width } = Dimensions.get('window');

export default function PeriodReport() {
	return (
		<>
			<View style={{ marginBottom: 125 }}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Period Report</Text>
					<TouchableOpacity style={{ width: 26, height: 26 }}>
						<Image
							source={require('../assets/icons/next.png')}
							resizeMode='contain'
							style={{
								width: '80%',
								height: '80%',
								tintColor: 'gray',
							}}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.grid}>
					{PERIOD_SPENDINGS.map((item, index) => (
						<PeriodReportCard
							key={index}
							amount={item.amount}
							category={item.category}
							percentage={item.percentage}
						/>
					))}
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		width: width * 0.84,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 32,
		marginBottom: 12,
	},

	title: {
		fontSize: 13,
		fontWeight: 'bold',
		color: COLOR_PALETTE.primary_darkGray,
	},

	grid: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
});

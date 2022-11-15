import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR_PALETTE } from '../COLOR_PALETTE';
import BudgetGraph from './BudgetGraph';

export default function MonthlyBudget() {
	return (
		<View style={styles.container}>
			<View style={styles.graph}>
				<BudgetGraph />
			</View>

			<View style={styles.info}>
				<View style={styles.infoDetail}>
					<Text style={styles.detailBold}>Monthly budget</Text>
					<Text style={styles.detailBold}>$1224.37 left</Text>
				</View>

				<View style={styles.infoDetail}>
					<Text style={styles.detailLight}>143 a day</Text>
					<Text style={styles.detailLight}>of $4000</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		width: '100%',
		height: 90,
		borderRadius: 12,
		backgroundColor: COLOR_PALETTE.primary_white,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	graph: {
		height: '80%',
		aspectRatio: 1,
		paddingLeft: 6,
	},

	info: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	infoDetail: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: 16,
		paddingLeft: 12,
	},

	detailBold: {
		fontWeight: '700',
		fontSize: 13,
		marginBottom: 2,
	},

	detailLight: {
		fontWeight: '500',
		fontSize: 12,
		color: COLOR_PALETTE.primary_lightGray,
	},
});

import { View, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import React from 'react';
import { COLOR_PALETTE } from '../COLOR_PALETTE';
import { useFonts } from 'expo-font';
import TotalBalance from '../components/TotalBalance';
import Spendings from '../components/Spendings';
import { SPENDINGS_INFO } from '../DUMMY_DATA';
import MonthlyBudget from '../components/MonthlyBudget';
import PeriodReport from '../components/PeriodReport';

const { width } = Dimensions.get('window');

const amountValArray = [];
for (let i = 0; i < SPENDINGS_INFO.length; i++) {
	amountValArray.push(SPENDINGS_INFO[i].amount);
}
const maxSpendingVal = Math.max(...amountValArray);
totalSpending = amountValArray.reduce(function (a, b) {
	return a + b;
}, 0);

export default function InsightScreen() {
	const [loaded, error] = useFonts({
		qsBold: require('../assets/fonts/Quicksand-Bold.otf'),
	});
	if (!loaded) return undefined;

	return (
		<>
			<View style={styles.container}>
				<TotalBalance />

				<ScrollView style={styles.bottomContainer}>
					<Spendings
						maxSpendingVal={maxSpendingVal}
						spendingsInfo={SPENDINGS_INFO}
						totalSpending={totalSpending}
					/>

					<MonthlyBudget />

					<PeriodReport />
				</ScrollView>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR_PALETTE.primary_darkGray,
	},

	bottomContainer: {
		flex: 1,
		paddingHorizontal: width * 0.07,
		paddingTop: 32,
		backgroundColor: COLOR_PALETTE.primary_backGround,
		borderTopLeftRadius: 36,
		borderTopRightRadius: 36,
	},
});

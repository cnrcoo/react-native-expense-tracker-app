import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import UserInfo from '../components/UserInfo';
import { USER_INFO } from '../DUMMY_DATA';
import UserCCard from '../components/UserCCard';
import ExchangeRates from '../components/ExchangeRates';
import { COLOR_PALETTE } from '../COLOR_PALETTE';
import Transactions from '../components/Transactions';

export default function HomeScreen() {
	return (
		<ScrollView
			style={{ flex: 1, backgroundColor: COLOR_PALETTE.primary_backGround }}
		>
			<View style={styles.container}>
				<UserInfo name={USER_INFO.name} />

				<UserCCard
					name={USER_INFO.name}
					surname={USER_INFO.surname}
					cardNumber={USER_INFO.cardNumber}
					cardType={USER_INFO.cardType}
					expDate={USER_INFO.expDate}
				/>

				<ExchangeRates />

				<Transactions />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 36,
		alignItems: 'center',
	},
});

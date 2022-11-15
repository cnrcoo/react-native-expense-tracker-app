import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native';
import React from 'react';
import { COLOR_PALETTE } from '../COLOR_PALETTE';
import { TRANSACTION_INFO } from '../DUMMY_DATA';
import shopping from '../assets/txIcons/shopping.png';
import restaurant from '../assets/txIcons/restaurant.png';
import transportation from '../assets/txIcons/transportation.png';
import send from '../assets/txIcons/send.png';
import receive from '../assets/txIcons/receive.png';

const { width } = Dimensions.get('window');

const TransactionCard = ({ txName, txType, txAmount, action }) => {
	const getIcon = (txType) => {
		if (txType == 'Transaction' && action == 'sent') {
			return send;
		} else if (txType == 'Transaction' && action == 'received') {
			return receive;
		} else if (txType == 'Transportation') {
			return transportation;
		} else if (txType == 'Restaurant') {
			return restaurant;
		} else {
			return shopping;
		}
	};

	return (
		<>
			<View style={styles.cardContainer}>
				<View
					style={[
						styles.leftContainer,
						{
							backgroundColor:
								action == 'received'
									? COLOR_PALETTE.primary_green
									: COLOR_PALETTE.primary_backGround,
						},
					]}
				>
					<Image
						source={getIcon(txType)}
						resizeMode='contain'
						style={{
							width: action == 'received' ? '56%' : '50%',
							height: action == 'received' ? '56%' : '50%',
							tintColor:
								action == 'received'
									? COLOR_PALETTE.primary_white
									: COLOR_PALETTE.primary_darkGray,
						}}
					/>
				</View>

				<View style={styles.rightContainer}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Text style={styles.txName}>{txName}</Text>
						<Text style={styles.txAmount}>
							{action == 'received' ? '+' : '-'}${txAmount}
						</Text>
					</View>

					<Text style={styles.txType}>{txType}</Text>
				</View>
			</View>
		</>
	);
};

export default function Transactions() {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Transactions</Text>
				<TouchableOpacity style={{ width: 22, height: 22 }}>
					<Image
						source={require('../assets/icons/next.png')}
						resizeMode='contain'
						style={{
							width: '100%',
							height: '100%',
							tintColor: 'gray',
						}}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.bottomContainer}>
				<View style={styles.verticalLine} />

				{TRANSACTION_INFO.map((item, index) => (
					<TransactionCard
						key={index}
						txName={item.txName}
						txType={item.txType}
						txAmount={item.txAmount}
						action={item.action}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: width * 0.84,
		marginTop: 22,
		marginBottom: 70,
	},

	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	title: {
		fontSize: 13,
		fontWeight: 'bold',
		color: COLOR_PALETTE.primary_darkGray,
	},

	bottomContainer: {
		width: '100%',
		backgroundColor: 'white',
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 6,
		marginTop: 18,
	},

	verticalLine: {
		position: 'absolute',
		width: 1,
		left: 43,
		top: 36,
		bottom: 16,
		backgroundColor: COLOR_PALETTE.primary_backGround,
	},

	/* ÔåôÔåô TRANSACTIONCARD COMPONENT ÔåôÔåô */
	cardContainer: {
		width: '100%',
		height: 76,
		padding: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	leftContainer: {
		width: 54,
		height: 54,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 8,
		borderColor: 'white',
	},

	rightContainer: {
		flex: 1,
		height: 50,
		paddingLeft: 12,
		justifyContent: 'center',
	},

	txName: {
		fontWeight: 'bold',
		fontSize: 13,
		letterSpacing: 0.2,
		color: COLOR_PALETTE.primary_darkGray,
	},

	txAmount: {
		fontWeight: '600',
		fontSize: 13,
		letterSpacing: -0.2,
		color: COLOR_PALETTE.primary_darkGray,
	},

	txType: {
		fontWeight: '500',
		color: COLOR_PALETTE.primary_lightGray,
		fontSize: 11,
	},
});

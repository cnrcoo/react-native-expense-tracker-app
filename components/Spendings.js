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

const { width } = Dimensions.get('window');

export default function Spendings({
	maxSpendingVal,
	spendingsInfo,
	totalSpending,
}) {
	const adjustFlex = (val) => {
		return val / maxSpendingVal;
	};

	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Spendings</Text>
				<TouchableOpacity style={{ width: 26, height: 26 }}>
					<Image
						source={require('../assets/icons/dots.png')}
						resizeMode='contain'
						style={{
							width: '100%',
							height: '100%',
							tintColor: 'gray',
						}}
					/>
				</TouchableOpacity>
			</View>

			<Text style={styles.spendingAmount}>${totalSpending.toFixed(2)}</Text>

			<View style={styles.spendingGraph}>
				<View style={styles.line} />

				<View style={styles.innerSpendingGraph}>
					{spendingsInfo.map((item, index) => (
						<View key={index} style={{ flex: 0.1 }}>
							{item.amount > 0 ? (
								<View
									style={{
										flex: 0.88,
										justifyContent: 'center',
									}}
								>
									<View
										style={{
											backgroundColor:
												adjustFlex(item.amount) == 1
													? COLOR_PALETTE.primary_red
													: COLOR_PALETTE.primary_black,
											flex: adjustFlex(item.amount),
											borderRadius: 18,
											paddingBottom: 10,
											alignItems: 'center',
											justifyContent: 'flex-end',
										}}
									>
										<Text
											style={{
												color: 'white',
												marginBottom: -6,
												fontWeight: '300',
												opacity: 0.8,
											}}
										>
											≈
										</Text>

										<Text
											style={{
												color: 'white',
												fontSize:
													adjustFlex(item.amount) == 1 ? 10 : 8,
												opacity: 0.9,
												fontWeight:
													adjustFlex(item.amount) == 1
														? '700'
														: '500',
											}}
										>
											{item.amount > 0
												? `$${Math.round(item.amount)}`
												: ''}
										</Text>
									</View>
								</View>
							) : (
								<View style={styles.zeroAmount}>
									<View style={styles.zeroAmountInner}>
										<View style={styles.zeroAmountInnerDot} />
									</View>
								</View>
							)}

							<View style={styles.column}>
								<Text
									style={{
										fontSize: 11,
										fontWeight: '700',
										textTransform: 'uppercase',
									}}
								>
									{item.day.slice(0, 3)}
								</Text>
							</View>
						</View>
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
	},

	title: {
		fontSize: 13,
		fontWeight: 'bold',
		color: COLOR_PALETTE.primary_darkGray,
	},

	spendingAmount: {
		color: COLOR_PALETTE.primary_darkGray,
		fontSize: 15,
		letterSpacing: 0.22,
		fontWeight: '900',
	},

	spendingGraph: {
		marginTop: 16,
		width: ' 100%',
	},

	innerSpendingGraph: {
		width: '100%',
		height: 200,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	zeroAmount: {
		backgroundColor: COLOR_PALETTE.primary_backGround,
		flex: 0.88,
		justifyContent: 'center',
	},

	zeroAmountInner: {
		aspectRatio: 1,
		width: '100%',
		borderRadius: 100,
		borderWidth: 2,
		borderColor: COLOR_PALETTE.primary_lightGray,
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 0.44,
	},

	zeroAmountInnerDot: {
		width: 5,
		aspectRatio: 1,
		borderRadius: 100,
		backgroundColor: COLOR_PALETTE.primary_lightGray,
	},

	column: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		color: COLOR_PALETTE.primary_darkGray,
		bottom: 0,
		left: 0,
		right: 0,
	},

	line: {
		position: 'absolute',
		width: '100%',
		height: 2,
		marginTop: 88,
		opacity: 0.4,
		backgroundColor: COLOR_PALETTE.primary_lightGray,
	},
});

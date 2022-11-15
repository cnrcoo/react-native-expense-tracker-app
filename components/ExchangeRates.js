import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLOR_PALETTE } from '../COLOR_PALETTE';
import { MARKET_INFO } from '../DUMMY_DATA';
import upRight from '../assets/icons/upRight.png';
import downRight from '../assets/icons/downRight.png';

const { width } = Dimensions.get('window');

const getBGColor = (change_24h) => ({
	backgroundColor:
		change_24h <= 0 ? COLOR_PALETTE.primary_red : COLOR_PALETTE.primary_green,
});

const getColor = (change_24h) => ({
	color:
		change_24h <= 0 ? COLOR_PALETTE.primary_red : COLOR_PALETTE.primary_green,
});

const InfoCard = ({
	currencyName,
	value,
	change_24h,
	change_24h_percentage,
}) => {
	return (
		<View style={styles.infoCard}>
			<View style={[styles.infoCardLeft, getBGColor(change_24h)]}>
				<Image
					source={change_24h <= 0 ? downRight : upRight}
					resizeMode='contain'
					style={{ width: 22, height: 22, tintColor: 'white' }}
				/>
			</View>

			<View style={styles.infoCardRight}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontWeight: 'bold',
							color: COLOR_PALETTE.primary_darkGray,
						}}
					>
						{currencyName}
					</Text>
					<Text
						style={{
							fontSize: 12,
							fontWeight: 'bold',
							color: COLOR_PALETTE.primary_darkGray,
						}}
					>
						${value}
					</Text>
				</View>

				<Text
					style={[
						{
							fontSize: 11,
							fontWeight: 'bold',
						},
						getColor(change_24h),
					]}
				>
					{change_24h} ({change_24h_percentage}%)
				</Text>
			</View>
		</View>
	);
};

export default function ExchangeRates() {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Exchange Rates</Text>
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

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.infoCardContainer}
			>
				{MARKET_INFO.map((item, index) => (
					<InfoCard
						key={index}
						currencyName={item.currencyName}
						value={item.value}
						change_24h={item.change_24h}
						change_24h_percentage={item.change_24h_percentage}
					/>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: width,
		marginTop: 30,
		alignItems: 'center',
	},

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

	infoCardContainer: {
		width: width * 0.88,
		height: 90,
	},

	/* ÔåôÔåô INFOCARD COMPONENT ÔåôÔåô */
	infoCard: {
		backgroundColor: 'white',
		marginTop: 16,
		borderRadius: 8,
		marginLeft: width * 0.02,
		width: width * 0.38,
		height: 60,
		flexDirection: 'row',

		shadowColor: '#666666',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},

	infoCardLeft: {
		width: 22,
		height: '100%',
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},

	infoCardRight: {
		flex: 1,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
		padding: 8,
	},
});

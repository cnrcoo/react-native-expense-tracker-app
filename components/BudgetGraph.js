import { View, Text } from 'react-native';
import React from 'react';
import { ProgressChart } from 'react-native-chart-kit';
import { COLOR_PALETTE } from '../COLOR_PALETTE';

const data = {
	data: [0.66],
};

const chartConfig = {
	backgroundColor: '#e26a00',
	backgroundGradientFrom: COLOR_PALETTE.primary_white,
	backgroundGradientTo: COLOR_PALETTE.primary_white,
	decimalPlaces: 2, // optional, defaults to 2dp
	color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,

	style: {
		borderRadius: 16,
	},
};

export default function BudgetGraph() {
	return (
		<View>
			<ProgressChart
				data={data}
				width={72}
				height={72}
				strokeWidth={7}
				radius={18}
				chartConfig={chartConfig}
				hideLegend={true}
			/>
		</View>
	);
}

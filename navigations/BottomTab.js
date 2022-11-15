import Dummy from '../screens/Dummy';
import HomeScreen from '../screens/HomeScreen';
import { StyleSheet, View, Image } from 'react-native';
import { COLOR_PALETTE } from '../COLOR_PALETTE';
import InsightScreen from '../screens/InsightScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const getIconProps = (focused) => ({
	tintColor: focused
		? COLOR_PALETTE.primary_white
		: COLOR_PALETTE.primary_lightGray,
	height: focused ? 22 : 20,
	width: focused ? 22 : 20,
});

export default function BottomTab() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.tabBar,
				tabBarShowLabel: false,
			}}
		>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/icons/home.png')}
								style={getIconProps(focused)}
								resizeMode='contain'
							/>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name='Dummy'
				component={Dummy}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/icons/wallet.png')}
								style={getIconProps(focused)}
								resizeMode='contain'
							/>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name='Dummy2'
				component={Dummy}
				options={{
					tabBarIcon: () => (
						<View style={styles.addButton}>
							<Image
								source={require('../assets/icons/add.png')}
								style={{
									width: '40%',
									height: '40%',
									tintColor: 'white',
								}}
								resizeMode='contain'
							/>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name='Dummy3'
				component={InsightScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/icons/stats.png')}
								style={getIconProps(focused)}
								resizeMode='contain'
							/>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name='Dummy4'
				component={Dummy}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/icons/configure.png')}
								style={getIconProps(focused)}
								resizeMode='contain'
							/>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		position: 'absolute',
		backgroundColor: COLOR_PALETTE.primary_darkGray,
		height: 66,
		bottom: 14,
		left: 18,
		right: 18,
		borderRadius: 16,
		borderTopWidth: 0,

		shadowColor: COLOR_PALETTE.primary_darkGray,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},

	addButton: {
		width: 46,
		height: 46,
		borderRadius: 36,
		backgroundColor: COLOR_PALETTE.primary_green,
		justifyContent: 'center',
		alignItems: 'center',

		shadowColor: COLOR_PALETTE.primary_green,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 12,
	},
});

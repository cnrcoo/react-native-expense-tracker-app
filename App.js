import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import OnboardingScreen from './screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './navigations/BottomTab';

const Stack = createStackNavigator();

export default function App() {
	const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

	const check = async () => {
		const appData = await AsyncStorage.getItem('isAppFirstLaunched');
		if (appData == null) {
			setIsAppFirstLaunched(true);
			AsyncStorage.setItem('isAppFirstLaunched', 'false');
		} else {
			setIsAppFirstLaunched(true); //set true if you wanna see it always
		}
	};

	React.useEffect(() => {
		check();

		return () => {
			console.log('on unmount');
		};
	});

	return (
		<>
			<StatusBar style='dark' />
			{isAppFirstLaunched != null && (
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						{isAppFirstLaunched && (
							<Stack.Screen
								name='OnboardingScreen'
								component={OnboardingScreen}
							/>
						)}

						<Stack.Screen name='HomeScreen' component={BottomTab} />
					</Stack.Navigator>
				</NavigationContainer>
			)}
		</>
	);
}

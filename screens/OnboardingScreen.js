import React from 'react';
import {
	SafeAreaView,
	Image,
	StyleSheet,
	FlatList,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR_PALETTE } from '../COLOR_PALETTE';

const { width, height } = Dimensions.get('window');

const slides = [
	{
		id: '1',
		image: require('../assets/images/3.png'),
		title: 'Beware of Your Credits',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: '2',
		image: require('../assets/images/2.png'),
		title: 'Full Access to Your Wallet',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: '3',
		image: require('../assets/images/5.png'),
		title: 'Best Digital Solutions',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: '4',
		image: require('../assets/images/4.png'),
		title: 'Fully Customizable',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: '5',
		image: require('../assets/images/6.png'),
		title: 'Next-Gen Investment',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: '6',
		image: require('../assets/images/1.png'),
		title: 'Get Started Now',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},

	// Can add more items to create new pages
];

const Slide = ({ item }) => {
	return (
		<View style={{ alignItems: 'center' }}>
			<Image
				source={item?.image}
				style={{ height: '80%', width, resizeMode: 'contain' }}
			/>
			<View>
				<Text style={styles.title}>{item?.title}</Text>
				<Text style={styles.subtitle}>{item?.subtitle}</Text>
			</View>
		</View>
	);
};

export default function OnboardingScreen({ navigation }) {
	const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
	const ref = React.useRef();
	const updateCurrentSlideIndex = (e) => {
		const contentOffsetX = e.nativeEvent.contentOffset.x;
		const currentIndex = Math.round(contentOffsetX / width);
		setCurrentSlideIndex(currentIndex);
	};

	const goToNextSlide = () => {
		const nextSlideIndex = currentSlideIndex + 1;
		if (nextSlideIndex != slides.length) {
			const offset = nextSlideIndex * width;
			ref?.current.scrollToOffset({ offset });
			setCurrentSlideIndex(currentSlideIndex + 1);
		}
	};

	const skip = () => {
		const lastSlideIndex = slides.length - 1;
		const offset = lastSlideIndex * width;
		ref?.current.scrollToOffset({ offset });
		setCurrentSlideIndex(lastSlideIndex);
	};

	const Footer = () => {
		return (
			<View
				style={{
					height: height * 0.2,
					justifyContent: 'space-between',
					paddingHorizontal: 20,
				}}
			>
				{/* Indicator container */}
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginTop: 20,
					}}
				>
					{/* Render indicator */}
					{slides.map((_, index) => (
						<View
							key={index}
							style={[
								styles.indicator,
								currentSlideIndex == index && {
									backgroundColor: COLOR_PALETTE.primary_green,
									width: 25,
								},
							]}
						/>
					))}
				</View>

				{/* Render buttons */}
				<View style={{ marginBottom: 20 }}>
					{currentSlideIndex == slides.length - 1 ? (
						<View style={{ height: 50, marginBottom: 4 }}>
							<TouchableOpacity
								style={[
									styles.btn,
									{ borderRadius: 12, elevation: 12 },
								]}
								onPress={() => navigation.replace('HomeScreen')}
							>
								<Text
									style={{
										fontWeight: 'bold',
										fontSize: 16,
										color: COLOR_PALETTE.primary_green,
										letterSpacing: 1.6,
									}}
								>
									GET STARTED
								</Text>
							</TouchableOpacity>
						</View>
					) : (
						<View style={{ flexDirection: 'row' }}>
							<View
								style={{
									flex: 1,
									justifyContent: 'center',
								}}
							>
								<TouchableOpacity
									activeOpacity={0.8}
									style={{
										width: 50,
										height: 30,
										borderRadius: 5,
										backgroundColor: COLOR_PALETTE.primary_white,
										justifyContent: 'center',
										alignItems: 'center',
										marginTop: 8,
									}}
									onPress={skip}
								>
									<View
										style={{
											paddingLeft: 16,
										}}
									>
										<Text
											style={{
												fontWeight: 'bold',
												fontSize: 12,
												color: COLOR_PALETTE.primary_darkGray,
											}}
										>
											SKIP
										</Text>
									</View>
								</TouchableOpacity>
							</View>

							<TouchableOpacity
								activeOpacity={0.8}
								onPress={goToNextSlide}
								style={[
									styles.btn,
									{
										marginLeft: 8,
									},
								]}
							>
								<LinearGradient
									style={{
										width: '100%',
										height: '100%',
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: 22,
									}}
									colors={[
										COLOR_PALETTE.primary_green,
										COLOR_PALETTE.primary_blue,
									]}
									locations={[0.4, 1]}
									start={{ x: 0.3, y: 0 }}
								>
									<Text
										style={{
											fontWeight: '900',
											fontSize: 16,
											letterSpacing: 0.8,
											color: COLOR_PALETTE.primary_white,
										}}
									>
										NEXT
									</Text>
								</LinearGradient>
							</TouchableOpacity>
						</View>
					)}
				</View>
			</View>
		);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
			<FlatList
				ref={ref}
				onMomentumScrollEnd={updateCurrentSlideIndex}
				contentContainerStyle={{
					height: height * 0.8,
				}}
				showsHorizontalScrollIndicator={false}
				horizontal
				data={slides}
				pagingEnabled
				renderItem={({ item }) => <Slide item={item} />}
			/>

			<Footer />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	image: {
		height: '100%',
		width: '100%',
		resizeMode: 'contain',
	},

	title: {
		color: COLOR_PALETTE.primary_black,
		fontSize: 22,
		fontWeight: 'bold',
		marginTop: 20,
		textAlign: 'center',
	},

	subtitle: {
		color: COLOR_PALETTE.primary_black,
		fontSize: 13,
		marginTop: 10,
		maxWidth: '70%',
		textAlign: 'center',
		lineHeight: 23,
	},

	indicator: {
		height: 2.5,
		width: 10,
		backgroundColor: COLOR_PALETTE.primary_darkGray,
		marginHorizontal: 3,
		borderRadius: 2,
	},

	btn: {
		flex: 1,
		height: 50,
		borderRadius: 5,
		backgroundColor: COLOR_PALETTE.primary_white,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

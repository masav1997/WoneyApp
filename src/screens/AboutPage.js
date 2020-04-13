import * as React from 'react';
import { View, Dimensions, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import { NeomorphBox } from 'react-native-neomorph-shadows';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import AboutBlock from '../components/AboutBlock';

const { width, height } = Dimensions.get('window');

export default class AboutPage extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<View
					style={{
						backgroundColor: '#ff1944',
						height: height / 1.5,
						width: width,
						borderBottomLeftRadius: 25,
						borderBottomRightRadius: 25,
						paddingLeft: 20,
						paddingRight: 20,
					}}
				>
					<SafeAreaView style={{ marginTop: Platform.OS === 'android' ? 20 : 0 }}>
						<Image
							source={require('../../assets/icons/plane.png')}
							style={{
								width: 165,
								height: 155,
								borderRadius: 20,
								position: 'absolute',
								alignSelf: 'flex-end',
								marginTop: height / 4,
								right: -20,
							}}
						/>
						<Header
							back={() => this.props.navigation.goBack()}
							navigate={() => this.props.navigation.navigate('AboutPage')}
							BackButton={<BackButton />}
						/>
						<NeomorphBox
							darkShadowColor="rgba(55, 84, 170, 0.15)"
							lightShadowColor="rgba(55, 84, 170, 0.15)"
							style={{
								backgroundColor: '#fff',
								height: height,
								width: width - 50,
								borderRadius: 7,
								marginLeft: 5,
								shadowOpacity: 0.1,
								shadowRadius: 15,
								paddingLeft: 30,
								paddingRight: 30,
								marginTop: 10,
							}}
							swapShadowLevel
						>
							<ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 10,
										marginTop: 30,
										alignSelf: 'center',
									}}
								>
									<NeomorphBox
										swapShadowLevel
										style={{
											shadowRadius: 6,
											borderRadius: 64,
											backgroundColor: '#fff',
											width: 64,
											height: 64,
											shadowOpacity: 0.2,
											shadowRadius: 7,
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Image
											source={require('../../assets/icons/icon1.png')}
											style={{ width: 38, height: 42, alignSelf: 'center' }}
										/>
									</NeomorphBox>
								</View>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 40,
										marginTop: 10,
										alignSelf: 'center',
									}}
								>
									<View style={{ flex: 1 }}>
										<Image
											source={require('../../assets/icons/one.png')}
											style={{ width: 12, height: 34, alignSelf: 'center', top: 5 }}
										/>
									</View>
									<View style={{ flex: 4 }}>
										<Text
											style={{
												fontSize: 14,
												fontWeight: '500',
												color: '#656565',
												lineHeight: 21,
												textAlign: 'left',
											}}
										>
											Take a picture of your boarding pass or upload your online boarding pass.
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 10,
										alignSelf: 'center',
									}}
								>
									<NeomorphBox
										swapShadowLevel
										style={{
											shadowRadius: 6,
											borderRadius: 64,
											backgroundColor: '#fff',
											width: 64,
											height: 64,
											shadowOpacity: 0.2,
											shadowRadius: 7,
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Image
											source={require('../../assets/icons/icon2.png')}
											style={{ width: 32, height: 34, alignSelf: 'center' }}
										/>
									</NeomorphBox>
								</View>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 40,
										marginTop: 10,
										alignSelf: 'center',
									}}
								>
									<View style={{ flex: 1 }}>
										<Image
											source={require('../../assets/icons/two.png')}
											style={{ width: 23, height: 35, alignSelf: 'center', top: 4 }}
										/>
									</View>
									<View style={{ flex: 4 }}>
										<Text
											style={{
												fontSize: 14,
												fontWeight: '500',
												color: '#656565',
												lineHeight: 21,
												textAlign: 'left',
											}}
										>
											Upload your boarding pass, enter your email address and your public Ethereum wallet address.
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 10,
										alignSelf: 'center',
									}}
								>
									<NeomorphBox
										swapShadowLevel
										style={{
											shadowRadius: 6,
											borderRadius: 64,
											backgroundColor: '#fff',
											width: 64,
											height: 64,
											shadowOpacity: 0.2,
											shadowRadius: 7,
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Image
											source={require('../../assets/icons/icon3.png')}
											style={{ width: 20, height: 34, alignSelf: 'center' }}
										/>
									</NeomorphBox>
								</View>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 140,
										marginTop: 10,
										alignSelf: 'center',
									}}
								>
									<View style={{ flex: 1 }}>
										<Image
											source={require('../../assets/icons/three.png')}
											style={{ width: 22, height: 36, alignSelf: 'center', top: 3 }}
										/>
									</View>
									<View style={{ flex: 4 }}>
										<Text
											style={{
												fontSize: 14,
												fontWeight: '500',
												color: '#656565',
												lineHeight: 21,
												textAlign: 'left',
											}}
										>
											Wait for the confirmation email and get your Woney.
										</Text>
									</View>
								</View>
							</ScrollView>
						</NeomorphBox>
					</SafeAreaView>
				</View>
			</View>
		);
	}
}

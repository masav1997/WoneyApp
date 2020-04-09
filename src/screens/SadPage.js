import * as React from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import { NeomorphBox } from 'react-native-neomorph-shadows';
import Header from '../components/Header';
import ButtonLeft from '../components/ButtonLeft';
import BackButton from '../components/BackButton';

import { getWoneyError } from '../core/state/woney/selectors';

const { width, height } = Dimensions.get('window');

class SadPage extends React.Component {
	getErrorMessage = error => {
		if (!error) {
			return '';
		}

		switch (error.code) {
			case 101:
				return 'Your Ethereum address is invalid, please resubmit your request with the valid Ethereum address. Check out our FAQ to find out more.';
			case 102:
				return 'Your Email address is invalid, please resubmit your request with the valid Email address. Check out our FAQ to find out more.';
			case 103:
			case 104:
			case 201:
				return 'The barcode of your boarding pass must be clearly visible. Please resubmit your request with the higher image quality. Check out our FAQ to find out more.';
			case 202:
				return 'Our service is currently unavailable. Please resubmit your request later. Check out our FAQ to find out more.';
			case 301:
				return 'Woney Tokens have already been issued for your ticket. You can\'t use it twice. Check out our FAQ to find out more.';
			case 302:
				return 'Your ticket has been expired or invalid. Check out our FAQ to find out more.';
			default:
				return (<React.Fragment>
					No internet.
				</React.Fragment>);
		}
	};

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
							<ScrollView style={{ flex: 1 }}>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 30,
										marginTop: height / 8,
										alignSelf: 'center',
									}}
								>
									<NeomorphBox
										swapShadowLevel
										style={{
											shadowRadius: 6,
											borderRadius: 150,
											backgroundColor: '#fff',
											width: 150,
											height: 150,
											shadowOpacity: 0.2,
											shadowRadius: 7,
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Image
											source={require('../../assets/icons/sadly.png')}
											style={{
												width: 110,
												height: 110,
												alignSelf: 'center',
											}}
										/>
									</NeomorphBox>
								</View>
								<View
									style={{
										flexDirection: 'row',
										marginTop: 10,
										alignSelf: 'center',
									}}
								>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '700',
											color: '#000',
											lineHeight: 24,
											textAlign: 'center',
										}}
									>
										We're sorry. Your request has been denied. 
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 10,
										marginTop: 20,
										alignSelf: 'center',
										width: 94,
										height: 2,
										backgroundColor: '#ff1944',
									}}
								/>
								<View
									style={{
										flexDirection: 'row',
										marginTop: 10,
										alignSelf: 'center',
									}}
								>
									<Text
										style={{
											fontSize: 14,
											fontWeight: '400',
											color: '#8e8e8e',
											lineHeight: 24,
											textAlign: 'center',
										}}
									>
										{this.getErrorMessage(this.props.error)}	
									</Text>
								</View>
								<ButtonLeft
									onPress={() => this.props.navigation.navigate('LoginPage')}
									style={{
										borderRadius: 40,
										backgroundColor: '#f51b4a',
										width: 60,
										height: 60,
										paddingTop: 20,
										shadowOpacity: 0.6,
										shadowRadius: 10,
										paddingLeft: 30,
										paddingRight: 30,
									}}
									darkShadowColor="#f51b4a"
								/>
							</ScrollView>
						</NeomorphBox>
					</SafeAreaView>
				</View>
			</View>
		);
	}
}

export default connect(state => ({
	error: getWoneyError(state),
}))(SadPage);

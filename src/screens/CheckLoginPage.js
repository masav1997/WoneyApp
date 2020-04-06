import * as React from 'react';
import { View, Dimensions, SafeAreaView, Image, Text, ScrollView, TextInput, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { NeomorphBox } from 'react-native-neomorph-shadows';
import Header from '../components/Header';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { woneyRequest } from '../core/state/woney/actions';
import { getData, getSuccess, getWoneyError } from '../core/state/woney/selectors';

const { width, height } = Dimensions.get('window');

class CheckLoginPage extends React.Component {
	state = {
		email: '',
	};

	making_api_call = () => {
		this.props.request(this.props.data);
	};

	componentDidUpdate(prevProps) {
		if (this.props.success !== prevProps.success) {
			this.props.navigation.navigate('SmilePage');
		}
		
		if (this.props.error !== prevProps.error) {
			this.props.navigation.navigate('SadPage');
		}
	}

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
					<SafeAreaView style={{ marginTop: Platform.OS === 'android' ?  20 : 0 }}>
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
							BackButton={<BackButton/>}
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
										marginTop: 30,
										alignSelf: 'center',
									}}
								>
									<Text
										style={{
											fontSize: 18,
											fontWeight: '700',
											color: '#000',
											lineHeight: 23,
											textAlign: 'center',
										}}
									>
										Please check and confirm the information.
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 30,
									}}
								>
									<NeomorphBox
										inner
										style={{
											shadowRadius: 1,
											borderRadius: 34,
											backgroundColor: 'white',
											width: 160,
											height: 160,
											justifyContent: 'center',
											alignItems: 'center',
											shadowOpacity: 0.2,
											shadowRadius: 2,
										}}
									>
										<ImageBackground
											source={require('../../assets/icons/img.png')}
											style={{ width: 150, height: 150 }}
											imageStyle={{
												alignSelf: 'center',
												borderRadius: 30,
											}}
										>
											<TouchableOpacity
												style={{
													backgroundColor: '#FFF',
													width: 28,
													height: 28,
													borderRadius: 14,
													alignSelf: 'center',
													top: 8,
													marginLeft: 107,
												}}
												onPress={() => this.setState({ image: null, img: '', bool: 1 })}
											>
												<Image
													source={require('../../assets/icons/close.png')}
													style={{
														width: 13,
														height: 13,
														alignSelf: 'center',
														top: 7,
													}}
												/>
											</TouchableOpacity>
										</ImageBackground>
									</NeomorphBox>
								</View>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 10,
										alignItems: 'center',
									}}
								>
									<NeomorphBox
										style={{
											shadowRadius: 3,
											borderRadius: 24,
											backgroundColor: '#FFFF',
											width: width - 115,
											height: 48,
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<NeomorphBox
											inner
											style={{
												width: width - 120,
												height: 43,
												shadowOffset: { width: 5, height: 5 },
												shadowOpacity: 0.1,
												shadowColor: 'grey',
												shadowRadius: 2,
												borderRadius: 20,
												backgroundColor: 'white',
												flexDirection: 'row',
												alignItems: 'center',
											}}
										>
											<View style={{ flex: 1 }}>
												<Image
													source={require('../../assets/icons/email.png')}
													style={{
														width: 15,
														height: 11,
														marginLeft: 10,
														top: 1,
														tintColor: '#2eb827',
													}}
												/>
											</View>
											<View style={{ flex: 10 }}>
												<TextInput
													style={{
														fontSize: 14,
														color: '#000',
														marginLeft: 15,
														fontWeight: 'bold',
													}}
													placeholder={this.props.data.email}
													placeholderTextColor={'#000'}
													editable={false}
												/>
											</View>
										</NeomorphBox>
									</NeomorphBox>
								</View>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 20,
										alignItems: 'center',
									}}
								>
									<NeomorphBox
										style={{
											shadowRadius: 3,
											borderRadius: 24,
											backgroundColor: '#FFFF',
											width: width - 115,
											height: 48,
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<NeomorphBox
											inner
											style={{
												width: width - 120,
												height: 43,
												shadowOffset: { width: 5, height: 5 },
												shadowOpacity: 0.1,
												shadowColor: 'grey',
												shadowRadius: 2,
												borderRadius: 20,
												backgroundColor: 'white',
												flexDirection: 'row',
												alignItems: 'center',
											}}
										>
											<View style={{ flex: 1 }}>
												<Image
													source={require('../../assets/icons/wallet.png')}
													style={{
														width: 14,
														height: 12,
														marginLeft: 10,
														tintColor: '#2eb827',
													}}
												/>
											</View>
											<View style={{ flex: 10 }}>
												<TextInput
													style={{
														fontSize: 11,
														color: '#000',
														marginLeft: 15,
														fontWeight: 'bold',
													}}
													placeholder={this.props.data.eth_wallet}
													placeholderTextColor={'#000'}
													editable={false}
												/>
											</View>
										</NeomorphBox>
									</NeomorphBox>
								</View>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										alignSelf: 'center',
									}}
									onPress={() => {
										this.state.email === ''
											? this.setState({ email: 'call' })
											: this.setState({ email: '' });
									}}
								>
									<NeomorphBox
										style={{
											width: 30,
											height: 30,
											shadowOffset: { width: 7, height: 7 },
											shadowOpacity: 0.1,
											shadowColor: 'grey',
											shadowRadius: 6,
											borderRadius: 3,
											backgroundColor: 'white',
											alignItems: 'center',
											flex: 1,
											top: 6,
											marginRight: 5,
										}}
										lightShadowColor="grey"
									>
										{this.state.email !== '' ? (
											<Image
												source={require('../../assets/icons/check.png')}
												style={{
													width: 12,
													height: 10,
													marginTop: 10,
													tintColor: '#2eb827',
												}}
											/>
										) : null}
									</NeomorphBox>
									<Text
										style={{
											fontSize: 12,
											fontWeight: '400',
											color: '#000',
											lineHeight: 20,
											textAlign: 'left',
											flex: 4,
										}}
									>
										I agree to the{' '}
										<Text
											style={{
												fontSize: 12,
												fontWeight: '400',
												color: '#e91945',
												lineHeight: 20,
												textAlign: 'left',
												textDecorationLine: 'underline',
											}}
										>
											terms of service
										</Text>{' '}
										and{' '}
										<Text
											style={{
												fontSize: 12,
												fontWeight: '400',
												color: '#e91945',
												lineHeight: 20,
												textAlign: 'left',
												textDecorationLine: 'underline',
											}}
										>
											privacy policy.
										</Text>
									</Text>
								</TouchableOpacity>
								<Button
									onPress={this.making_api_call}
									style={{
										borderRadius: 40,
										backgroundColor: '#2eb827',
										width: 60,
										height: 60,
										paddingTop: 20,
										shadowOpacity: 0.6,
										shadowRadius: 10,
										paddingLeft: 30,
										paddingRight: 30,
									}}
									darkShadowColor="#2eb827"
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
	data: getData(state),
	success: getSuccess(state),
	error: getWoneyError(state),
}), (dispatch) => ({
  request: (data) => dispatch(woneyRequest(data)),
}))(CheckLoginPage);

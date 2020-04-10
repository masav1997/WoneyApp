import * as React from 'react';
import {
	View,
	Dimensions,
	SafeAreaView,
	Image,
	Text,
	TouchableOpacity,
	ScrollView,
	TextInput,
	ImageBackground,
	Alert,
} from 'react-native';
import { connect } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { NeomorphBox } from 'react-native-neomorph-shadows';
import Header from '../components/Header';
import Button from '../components/Button';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import CheckLoginPage from './CheckLoginPage';

import { woneyUpdateData } from '../core/state/woney/actions';
import { getSuccess, getWoneyError } from '../core/state/woney/selectors';

const { width, height } = Dimensions.get('window');

class LoginPage extends React.Component {
	state = {
		image: null,
		bool: 1,
		email: '',
		wallet: '',
		validator: '',
		img: '',
	};
	validate_field = () => {
		const { image, email, wallet, img } = this.state;

		if (email == '' || wallet == '' || img == '') {
			this.setState({ bool: 2 });
			return false;
		} else {
			this.setState({ validator: '', bool: 1 });
		}
		return true;
	};

	handle_page_change = () => {
    if (this.validate_field()) {
      const { email, wallet: eth_wallet, image: ticket } = this.state;
      this.props.updateData({ email, eth_wallet, ticket });
      this.props.navigation.navigate('CheckLoginPage');
    }
	};
	
	componentDidUpdate(prevProps) {
		if (this.props.success !== prevProps.success) {
			if (this.props.success === true) {
				this.setState({
					image: null,
					img: '',
				});
			}
		}
	}

	render() {
		let { image } = this.state;

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
						paddingBottom: 150,
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
							navigate={() => this.props.navigation.navigate('AboutPage')}
						/>
						{this.state.bool == 2 && this.state.img == '' ? (
							<View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 20,
									}}
								>
									<NeomorphBox
										style={{
											shadowRadius: 15,
											backgroundColor: '#DDDDDD',
											borderRadius: 34,
											backgroundColor: '#ff1944',
											width: 120,
											height: 120,
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<NeomorphBox
											inner
											style={{
												shadowRadius: 2,
												shadowColor: 'rgba(226, 24, 69, 0.8)',
												borderRadius: 30,
												backgroundColor: 'rgba(226, 24, 69, 0.8)',
												width: 110,
												height: 110,
												justifyContent: 'center',
												alignItems: 'center',
												shadowOpacity: 0.1,
											}}
										>
											<ImageBackground
												source={require('../../assets/icons/error.png')}
												style={{ width: 100, height: 100 }}
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
														marginLeft: 47,
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
									</NeomorphBox>
								</View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 20,
									}}
								>
									<Image
										source={require('../../assets/icons/close.png')}
										style={{ width: 11, height: 11, marginRight: 5, tintColor: '#fff' }}
									/>
									<Text
										style={{
											textAlign: 'center',
											fontSize: 12,
											fontWeight: '400',
											color: '#fff',
										}}
									>
										Can´t upload image. Please try again. 
									</Text>
								</View>
							</View>
						) : image ? (
							<View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 20,
									}}
								>
									<NeomorphBox
										style={{
											shadowRadius: 15,
											backgroundColor: '#DDDDDD',
											borderRadius: 34,
											backgroundColor: '#ff1944',
											width: 120,
											height: 120,
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<NeomorphBox
											inner
											style={{
												shadowRadius: 2,
												shadowColor: 'rgba(226, 24, 69, 0.8)',
												borderRadius: 30,
												backgroundColor: 'rgba(226, 24, 69, 0.8)',
												width: 110,
												height: 110,
												justifyContent: 'center',
												alignItems: 'center',
												shadowOpacity: 0.1,
											}}
										>
											<ImageBackground
												source={{ uri: image }}
												style={{ width: 100, height: 100 }}
												imageStyle={{
													alignSelf: 'center',
													borderRadius: 20,
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
														marginLeft: 47,
													}}
													onPress={() => this.setState({ image: null, img: '' })}
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
									</NeomorphBox>
								</View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 20,
									}}
								>
									<Image
										source={require('../../assets/icons/check.png')}
										style={{ width: 11, height: 9, marginRight: 5 }}
									/>
									<Text
										style={{
											textAlign: 'center',
											fontSize: 12,
											fontWeight: '400',
											color: '#fff',
										}}
									>
										Image uploaded successfully. 
									</Text>
								</View>
							</View>
						) : (
							<View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 5,
									}}
								>
									<TouchableOpacity onPress={this._takePhoto}>
										<NeomorphBox
											style={{
												shadowRadius: 10,
												borderRadius: 100,
												backgroundColor: '#fd113d',
												width: 100,
												height: 100,
												justifyContent: 'center',
												alignItems: 'center',
											}}
											darkShadowColor="#ae1935"
										>
											<NeomorphBox
												inner
												style={{
													shadowRadius: 3,
													borderRadius: 100,
													backgroundColor: '#fd113d',
													width: 100,
													height: 100,
													justifyContent: 'center',
													alignItems: 'center',
													shadowOpacity: 0.2,
												}}
												darkShadowColor="#FFF"
												lightShadowColor="#ae1935"
											>
												<NeomorphBox
													inner
													style={{
														shadowRadius: 2,
														borderRadius: 70,
														backgroundColor: '#fff',
														width: 70,
														height: 70,
														justifyContent: 'center',
														alignItems: 'center',
														shadowOpacity: 0.2,
													}}
													darkShadowColor="#000"
												>
													<Image
														source={require('../../assets/icons/cam.png')}
														style={{ width: 28, height: 22, alignSelf: 'center' }}
													/>
												</NeomorphBox>
											</NeomorphBox>
										</NeomorphBox>
									</TouchableOpacity>
								</View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 20,
									}}
								>
									<TouchableOpacity onPress={this._pickImage}>
										<NeomorphBox
											style={{
												shadowRadius: 10,
												borderRadius: 70,
												backgroundColor: '#fd113d',
												width: 70,
												height: 70,
												justifyContent: 'center',
												alignItems: 'center',
											}}
											darkShadowColor="#ae1935"
										>
											<NeomorphBox
												inner
												style={{
													shadowRadius: 3,
													borderRadius: 70,
													backgroundColor: '#fd113d',
													width: 70,
													height: 70,
													justifyContent: 'center',
													alignItems: 'center',
													shadowOpacity: 0.2,
												}}
												darkShadowColor="#FFF"
												lightShadowColor="#ae1935"
											>
												<NeomorphBox
													inner
													style={{
														shadowRadius: 2,
														borderRadius: 50,
														backgroundColor: '#fff',
														width: 50,
														height: 50,
														justifyContent: 'center',
														alignItems: 'center',
														shadowOpacity: 0.2,
													}}
													darkShadowColor="#000"
												>
													<Image
														source={require('../../assets/icons/upload.png')}
														style={{ width: 28, height: 17, alignSelf: 'center' }}
													/>
												</NeomorphBox>
											</NeomorphBox>
										</NeomorphBox>
									</TouchableOpacity>
								</View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 20,
									}}
								>
									<Text
										style={{
											textAlign: 'center',
											fontSize: 12,
											fontWeight: '400',
											color: '#fff',
										}}
									>
										Take a picture or upload your boarding pass or a screenshot of your online boarding pass.  
									</Text>
								</View>
							</View>
						)}

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
							}}
							swapShadowLevel
						>
							<ScrollView style={{ marginBottom: 150, flex: 1 }}>
								<View
									style={{
										flexDirection: 'row',
										marginBottom: 20,
										marginTop: 30,
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											textAlign: 'left',
											fontSize: 16,
											fontWeight: '700',
											color: '#000',
										}}
									>
										Enter your details
									</Text>
									<Image
										source={require('../../assets/icons/arrow.png')}
										style={{ width: 6, height: 10, top: 2, marginLeft: 10 }}
									/>
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
										{this.state.bool == 2 && this.state.email == '' ? (
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
														style={
															this.state.email === ''
																? {
																		width: 15,
																		height: 11,
																		marginLeft: 10,
																		tintColor: '#ff1944',
																  }
																: {
																		width: 15,
																		height: 11,
																		marginLeft: 10,
																		tintColor: '#2eb827',
																  }
														}
													/>
												</View>
												<View style={{ flex: 9 }}>
													<TextInput
														style={{
															fontSize: 14,
															color: '#a8a8a8',
															fontWeight: '500',
															marginLeft: 15,
														}}
														placeholder={'Invalid email'}
														placeholderTextColor={'#ff1944'}
														onChangeText={value => this.setState({ email: value })}
														value={this.state.email}
													/>
												</View>
												<View style={{ flex: 1 }}>
													<Image
														source={require('../../assets/icons/close.png')}
														style={{ width: 8, height: 8, tintColor: '#ff1944' }}
													/>
												</View>
											</NeomorphBox>
										) : (
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
														style={
															this.state.email === ''
																? {
																		width: 15,
																		height: 11,
																		marginLeft: 10,
																		tintColor: '#ff1944',
																  }
																: {
																		width: 15,
																		height: 11,
																		marginLeft: 10,
																		tintColor: '#2eb827',
																  }
														}
													/>
												</View>
												<View style={{ flex: 10 }}>
													<TextInput
														style={{
															fontSize: 14,
															color: '#a8a8a8',
															marginLeft: 15,
															fontWeight: '500',
														}}
														placeholder={'Your Email'}
														placeholderTextColor={'#8f8f8f'}
														onChangeText={value => this.setState({ email: value })}
														value={this.state.email}
													/>
												</View>
											</NeomorphBox>
										)}
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
										{this.state.bool == 2 && this.state.wallet == '' ? (
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
														style={
															this.state.wallet === ''
																? {
																		width: 14,
																		height: 12,
																		marginLeft: 10,
																		tintColor: '#ff1944',
																  }
																: {
																		width: 14,
																		height: 12,
																		marginLeft: 10,
																		tintColor: '#2eb827',
																  }
														}
													/>
												</View>
												<View style={{ flex: 9 }}>
													<TextInput
														style={{
															fontSize: 14,
															color: '#a8a8a8',
															fontWeight: '500',
															marginLeft: 15,
														}}
														placeholder={'Wrong wallet'}
														placeholderTextColor={'#ff1944'}
														onChangeText={value => this.setState({ wallet: value })}
														value={this.state.wallet}
													/>
												</View>
												<View style={{ flex: 1 }}>
													<Image
														source={require('../../assets/icons/close.png')}
														style={{ width: 8, height: 8, tintColor: '#ff1944' }}
													/>
												</View>
											</NeomorphBox>
										) : (
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
														style={
															this.state.wallet === ''
																? {
																		width: 14,
																		height: 12,
																		marginLeft: 10,
																		tintColor: '#ff1944',
																  }
																: {
																		width: 14,
																		height: 12,
																		marginLeft: 10,
																		tintColor: '#2eb827',
																  }
														}
													/>
												</View>
												<View style={{ flex: 10 }}>
													<TextInput
														style={{
															fontSize: 14,
															color: '#a8a8a8',
															marginLeft: 15,
															fontWeight: '500',
														}}
														placeholder={'Ethereum Wallet Public Address'}
														placeholderTextColor={'#8f8f8f'}
														onChangeText={value => this.setState({ wallet: value })}
														value={this.state.wallet}
													/>
												</View>
											</NeomorphBox>
										)}
									</NeomorphBox>
								</View>
								<View
									style={{
										flexDirection: 'row',
										alignSelf: 'center',
									}}
								>
									<Text
										style={{
											textAlign: 'center',
											fontSize: 12,
											fontWeight: '700',
											color: '#8f8f8f',
										}}
									>
										We use your data to deposit Woney Tokens. We don't store or share your details with anyone.
									</Text>
								</View>
								{this.state.bool == 2 && this.state.img == '' ? (
									<View
										style={{
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'center',
											marginBottom: 20,
											marginTop: 10,
										}}
									>
										<Image
											source={require('../../assets/icons/close.png')}
											style={{ width: 8, height: 8, marginRight: 5, top: 1 }}
										/>
										<Text
											style={{
												textAlign: 'center',
												fontSize: 12,
												fontWeight: 'bold',
												lineHeight: 20,
												color: '#ff1944',
											}}
										>
											Please upload a photo.
										</Text>
									</View>
								) : null}
								{(
									<Button
										onPress={this.handle_page_change}
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
								)}
							</ScrollView>
						</NeomorphBox>
					</SafeAreaView>
				</View>
			</View>
		);
	}
	componentDidMount() {
		this.getPermissionAsync();
	}

	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!');
			}
		}
	};

	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
		});

		if (!result.cancelled) {
			this.setState({ image: result.uri, bool: true, img: 'yes' });
		}
	};

	_takePhoto = async () => {
		const { status: cameraPerm } = await Permissions.askAsync(Permissions.CAMERA);

		const { status: cameraRollPerm } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

		if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
			let pickerResult = await ImagePicker.launchCameraAsync({
				allowsEditing: true,
				aspect: [4, 3],
			});

			if (!pickerResult.cancelled) {
				this.setState({ image: pickerResult.uri, bool: true, img: 'yes' });
			}
		}
	};
}

export default connect(
	(state) => ({
		success: getSuccess(state),
		error: getWoneyError(state),
	}),
	(dispatch) => ({
  	updateData: (data) => dispatch(woneyUpdateData(data)),
	})
)(LoginPage);

import React from 'react';
import { View, TouchableOpacity, Image, Dimensions, Text } from 'react-native';
import { NeomorphBox } from 'react-native-neomorph-shadows';
import Modal from 'react-native-modal';
const { width, height } = Dimensions.get('window');

export default class Header extends React.Component {
	state = {
		isModalVisible: false,
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	render() {
		const { back, navigate, BackButton} = this.props;
		const viewStyle = {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 5,
			marginBottom: 10,
		};
		const neomorphStyle = {
			shadowRadius: 6,
			shadowColor: 'rgba(226, 24, 69, 0.8)',
			borderRadius: 25,
			backgroundColor: '#ff1944',
			width: 48,
			height: 48,
			paddingTop: 15,
			shadowOpacity: 0.2,
			shadowRadius: 7,
		};

		const logoStyle = {
			width: 20,
			height: 22,
			alignSelf: 'center',
		};

		return (
			<View>
				<View style={viewStyle}>
					<View style={{ flex: 1 }}>
						<TouchableOpacity onPress={back}>
							{BackButton}
						</TouchableOpacity>
					</View>
					<View style={{ flex: 1, alignItems: 'center' }}>
						<Image source={require('../../assets/icons/logo.png')} style={{ width: 110, height: 19 }} />
					</View>
					<View style={{ flex: 1, alignItems: 'flex-end' }}>
						<TouchableOpacity onPress={this.toggleModal}>
							<NeomorphBox swapShadowLevel style={neomorphStyle}>
								<Image source={require('../../assets/icons/nav.png')} style={logoStyle} />
							</NeomorphBox>
						</TouchableOpacity>
					</View>
				</View>
				<Modal
					isVisible={this.state.isModalVisible}
					style={{ alignSelf: 'flex-end' }}
					backdropOpacity={0}
					onBackdropPress={this.toggleModal}
				>
					<NeomorphBox
						darkShadowColor="rgba(55, 84, 170, 0.15)"
						lightShadowColor="rgba(55, 84, 170, 0.15)"
						style={{
							marginLeft: 5,
							shadowOpacity: 0.1,
							shadowRadius: 15,
							paddingLeft: 30,
							paddingRight: 30,
							width: width / 1.5,
							height: Platform.OS === 'android' ?  height+30 : height-30,
							backgroundColor: '#fff',
							borderRadius: 7,
							textAlign: 'right',
							alignSelf: 'flex-end',
							marginRight: -20,
							marginBottom: -150,
							paddingTop: 30,
						}}
						swapShadowLevel
					>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								marginBottom: 10,
								marginTop: 10,
								alignSelf: 'center',
							}}
						>
							<View style={{ flex: 1 }}>
								<Image
									source={require('../../assets/icons/play.png')}
									style={{ width: 8, height: 11, alignSelf: 'center', top: 5 }}
								/>
							</View>
							<View style={{ flex: 4 }}>
								<Text
									style={{
										fontSize: 14,
										fontWeight: '700',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									Go to website
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								marginBottom: 10,
								marginTop: 10,
								alignSelf: 'center',
							}}
						>
							<View style={{ flex: 1 }}>
								<Image
									source={require('../../assets/icons/question.png')}
									style={{ width: 8, height: 11, alignSelf: 'center', top: 5 }}
								/>
							</View>
							<View style={{ flex: 4 }}>
								<Text
									style={{
										fontSize: 14,
										fontWeight: '700',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									Support
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								marginBottom: 10,
								marginTop: 10,
								alignSelf: 'center',
							}}
							onPress={navigate}
							onPressOut={this.toggleModal}
						>
							<View style={{ flex: 1 }}>
								<Image
									source={require('../../assets/icons/logo_icon.png')}
									style={{ width: 17, height: 11, alignSelf: 'center', top: 5 }}
								/>
							</View>
							<View style={{ flex: 4 }}>
								<Text
									style={{
										fontSize: 14,
										fontWeight: '700',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									About Woney
								</Text>
							</View>
						</TouchableOpacity>
					</NeomorphBox>
				</Modal>
			</View>
		);
	}
}

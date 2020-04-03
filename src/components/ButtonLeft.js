import React from 'react';
import { View, Image } from 'react-native';
import { NeomorphBox } from 'react-native-neomorph-shadows';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ButtonLeft extends React.Component {
	render() {
		const { onPress, style, darkShadowColor} = this.props;
		return (
			<View
				style={{
					flexDirection: 'row',
					alignSelf: 'center',
					marginBottom: 250,
				}}
			>
				<TouchableOpacity
					style={{ width: 150, height: 150, alignItems: 'center', paddingTop: 20 }}
					onPress={onPress}
				>
					<NeomorphBox
						swapShadowLevel
						style={style}
						darkShadowColor={darkShadowColor}
						lightShadowColor="#fff"
					>
						<Image
							source={require('../../assets/icons/left.png')}
							style={{ width: 20, height: 16, alignSelf: 'center' }}
						/>
					</NeomorphBox>
				</TouchableOpacity>
			</View>
		);
	}
}

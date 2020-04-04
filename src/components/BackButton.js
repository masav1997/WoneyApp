import React from 'react';
import { Image } from 'react-native';
import { NeomorphBox } from 'react-native-neomorph-shadows';

export default class BackButton extends React.Component {
	render() {

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

		return (
			<NeomorphBox swapShadowLevel style={neomorphStyle}>
				<Image
					source={require('../../assets/icons/back.png')}
					style={{ width: 16, height: 22, alignSelf: 'center', marginRight: 4 }}
				/>
			</NeomorphBox>
		);
	}
}

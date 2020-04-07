import React from 'react';
import { Image, View, Text } from 'react-native';
import { NeomorphBox } from 'react-native-neomorph-shadows';

export default class AboutBlock extends React.Component {
	render() {
		const { image, imageStyle, image1, imageStyle1, text } = this.props;

		return (
			<View>
				<NeomorphBox
					style={{
						shadowRadius: 10,
						borderRadius: 69,
						backgroundColor: '#fff',
						width: 69,
						height: 100,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					darkShadowColor="#939498"
				>
					<NeomorphBox
						inner
						style={{
							shadowRadius: 1,
							borderRadius: 69,
							backgroundColor: '#fff',
							width: 69,
							height: 69,
							justifyContent: 'center',
							alignItems: 'center',
							shadowOpacity: 0.2,
						}}
						darkShadowColor="#FFF"
						lightShadowColor="#939498"
					>
						<NeomorphBox
							inner
							style={{
								shadowRadius: 2,
								borderRadius: 64,
								backgroundColor: '#fff',
								width: 64,
								height: 64,
								justifyContent: 'center',
								alignItems: 'center',
								shadowOpacity: 0.2,
							}}
							darkShadowColor="#939498"
						>
							<Image source={image} style={imageStyle} />
						</NeomorphBox>
					</NeomorphBox>
				</NeomorphBox>
				<View
					style={{
						flexDirection: 'row',
						marginBottom: 40,
						marginTop: 10,
						alignSelf: 'center',
					}}
				>
					<View style={{ flex: 1 }}>
						<Image source={image1} style={imageStyle1} />
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
							{text}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

import React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';

const ButtonLink = ({onPress,text}) => {
	return (
		<TouchableNativeFeedback
			onPress={onPress}
		>
			<Text style={{color:'#1c81d2'}}>{text}</Text>
		</TouchableNativeFeedback>
	)
}

export default ButtonLink;
import React from 'react';
import { TouchableNativeFeedback, Text, StyleSheet, View } from 'react-native';

const ButtonPrimary = ({ onPress, text }) => {
	return (
		<TouchableNativeFeedback
			background={TouchableNativeFeedback.Ripple('#70A7FF')}
            onPress={onPress}
		>
			<View style={styles.button}>
				<Text style={styles.text}>{ text }</Text>
			</View>
		</TouchableNativeFeedback>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#3C74CF',
		padding: 10,
		alignItems: 'center',
		elevation: 4
	},
	text: {
		color: 'white',
		fontWeight: 'bold'
	}
})

export default ButtonPrimary;
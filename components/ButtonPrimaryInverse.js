import React from 'react';
import { TouchableNativeFeedback, Text, StyleSheet, View } from 'react-native';

const ButtonPrimaryInverse = ({ onPress, text }) => {
	return (
		<TouchableNativeFeedback
			background={TouchableNativeFeedback.Ripple('#E6E6EC')}
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
		backgroundColor: '#FFF',
		padding: 10,
		alignItems: 'center',
		elevation: 4,
		borderWidth: 1,
		borderColor: '#3C74CF'
	},
	text: {
		color: '#3C74CF',
		fontWeight: 'bold'
	}
})

export default ButtonPrimaryInverse;
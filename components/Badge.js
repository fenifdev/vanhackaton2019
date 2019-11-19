import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Badge = ({ text, textColor, backgroundColor }) => {
	return (
		<View style={[styles.badge, {backgroundColor}]}>
			<Text style={{color:textColor, fontSize: 11}}>{ text }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	badge: {
		alignSelf: 'flex-start',
		padding: 10,
		paddingTop: 5,
		paddingBottom: 5
	}
});

export default Badge;
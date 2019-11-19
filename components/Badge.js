import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Badge = ({ text, textColor, backgroundColor }) => {
	return (
		<View style={[styles.badge, {backgroundColor}]}>
			<Text style={{color:textColor}}>{ text }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	badge: {
		padding: 10
	}
});

export default Badge;
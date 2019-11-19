import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Skill = ({ title, textColor }) => {
	return (
		<View style={styles.skill}>
			<Text style={{ color:textColor }}>{ title }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	skill: {
		borderColor: 'blue',
		borderWidth: 1,
		padding: 10
	}
});

export default Skill;
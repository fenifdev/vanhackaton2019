import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Skill = ({ title, textColor }) => {
	return (
		<View style={styles.skill}>
			<Text style={{ color:textColor, fontSize: 12 }}>{ title }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	skill: {
		alignSelf: 'flex-start',
		borderColor: 'blue',
		borderWidth: 1,
		padding: 10,
		paddingTop: 5,
		paddingBottom: 5,
		marginRight: 5,
		marginTop: 5,
	}
});

export default Skill;
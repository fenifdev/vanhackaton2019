import React from 'react';
import { TouchableNativeFeedback, StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

const Course = ({course, onPress}) => {
	return (
		<TouchableNativeFeedback
			onPress={onPress}
		>
			<View style={styles.course}>
				<ImageBackground source={course.image} style={styles.image}>
	        		<Text style={styles.title}>{course.title}</Text>
	        	</ImageBackground>
	        	<Text style={styles.description}>{course.description}</Text>
	        </View>
	    </TouchableNativeFeedback>
	)
}

const styles = StyleSheet.create({
	course: {
		marginBottom: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#CCC'
	},
	image: {
		height:150, 
		width: '100%', 
		justifyContent: 'flex-end'
	},
	title: {
		color:'white',
		fontSize: 20,
		padding: 10,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
  		textShadowOffset: {width: -1, height: 1},
  		textShadowRadius: 10
	},
	description: {
		margin:10
	}
});

export default Course;
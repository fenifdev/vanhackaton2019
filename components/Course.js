import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

const Course = ({course}) => {
	return (
		<View style={styles.course}>
			<ImageBackground source={course.image} style={styles.image}>
        		<Text style={styles.title}>{course.title}</Text>
        	</ImageBackground>
        	<Text style={styles.description}>{course.description}</Text>
        </View>
	)
}

const styles = StyleSheet.create({
	course: {
		marginBottom: 10
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
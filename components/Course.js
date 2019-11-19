import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

const Course = ({course}) => {
	return (
		<View style={{ marginBottom: 10}}>
			<ImageBackground source={course.image} style={{ height:150, width: '100%', justifyContent: 'flex-end' }}>
        		<Text style={{color:'white', fontSize: 20, padding: 10, textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>{course.title}</Text>
        	</ImageBackground>
        	<Text style={{marginTop:10,marginBottom:10}}>{course.description}</Text>
        </View>
	)
}

export default Course;
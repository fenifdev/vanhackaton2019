import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { courses } from '../constants/mocks.js';
import CourseContentItem from '../components/CourseContentItem.js'

export default function CourseScreen() {
	const course = courses[0];
	let content = course.content.map((content) => { return <CourseContentItem key={content.id} item={content} /> });
  return (
    <ScrollView style={{padding: 10}}>
      <Text style={{fontSize: 20}}>{course.title}</Text>
      <View style={{marginTop:20,padding:10,elevation:4,shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',}}>
	      <Text style={{fontSize:17,fontWeight:'bold'}}>Content</Text>
	      <View>{content}</View>
      </View>
    </ScrollView>
  );
}
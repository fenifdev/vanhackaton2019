import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { courses } from '../constants/mocks.js';
import CourseContentItem from '../components/CourseContentItem.js'

export default function CourseScreen() {
	const course = courses[0];
	let content = course.content.map((content) => { return <CourseContentItem key={content.id} item={content} /> });
  return (
    <View>
      <Text>{course.title}</Text>
      <Text>Content</Text>

      <View>{content}</View>
    </View>
  );
}
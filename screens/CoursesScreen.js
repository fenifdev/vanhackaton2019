import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { courses } from '../constants/mocks.js';
import Course from '../components/Course.js';

const coursesscreen = class CoursesScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    const list_courses = courses.map((course) => { return <Course course={course} />});

    return (
      <View>
        <Text>Search Input</Text>
        <TextInput 
          style={styles.inputText}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
        />
        <Button title="Course" onPress={()=>navigation.navigate('Course')}></Button>

        <View>
        { list_courses }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: '#0675ce'
  },
  inputText: {
    borderColor: '#c1cbd3', 
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5
  }
});

export default coursesscreen;
import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { courses } from '../constants/mocks.js';
import Course from '../components/Course.js';

const coursesscreen = class CoursesScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    const list_courses = courses.map((course) => { return <Course key={course.id} course={course} />});

    return (
      <View style={{padding:10}}>
        <TextInput 
          style={styles.inputText}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
        />
        <Button title="Course" onPress={()=>navigation.navigate('Course')}></Button>

        <View style={{marginTop:10}}>
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
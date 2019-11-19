import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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

export default function CoursesScreen() {
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
    </View>
  );
}
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CoursesScreen() {
  return (
    <View>
      <Text>Search Input</Text>
      <TextInput 
      	autoComplete="off"
      	autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}
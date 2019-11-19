import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function JobsScreen() {
  return (
    <View>
      <Text>Search Input</Text>
      <TextInput 
      	autoComplete="off"
      	autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
      />
      <Button title="Apply"></Button>
      <Button title="Skip"></Button>
    </View>
  );
}
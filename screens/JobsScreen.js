import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const jobsscreen = class JobsScreen extends React.Component {
  render() {
    return (
      <View>
        <TextInput 
          style={styles.inputText}
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

export default jobsscreen;
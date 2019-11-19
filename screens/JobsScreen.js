import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Badge from '../components/Badge.js';
import Skill from '../components/Skill.js';

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

        <Text>35 jobs of 40</Text>

        <Text>Title Job</Text>
        <Badge text="NEW" textColor="white" backgroundColor="black"/>
        <Text>Fav Icon Job</Text>
        <Text>Location Job</Text>
        <Skill title="PHP" textColor="red" />
        <Text>Title Job</Text>
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
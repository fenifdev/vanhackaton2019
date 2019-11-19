import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Job from '../components/Job.js';

const jobsscreen = class JobsScreen extends React.Component {
  render() {
    return (
      <View style={{padding:10}}>
        <TextInput 
          style={styles.inputText}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
        />
        <View style={{ marginTop:10, marginBottom:10 }}>
          <Text style={{ fontSize: 20 }}>35 jobs of 40</Text>
        </View>
        <Job job={{title:'backend engineer', location:'Toronto', description:'this could be a lorem insup this could be a lorem insup this could be a lorem insup'}}/>
        <Job job={{title:'frontend engineer', location:'Frankfurt', description:'this could be a lorem insup this could be a lorem insup this could be a lorem insup'}}/>
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
    marginTop: 5,
    marginBottom: 5
  }
});

export default jobsscreen;
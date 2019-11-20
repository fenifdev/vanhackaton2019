import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Job from '../components/Job.js';
import { jobs } from '../constants/mocks.js';

const jobsscreen = class JobsScreen extends React.Component {
  constructor() {
    super();
    console.log(jobs);
    this.state = { jobs: jobs };
  }

  skipJob(job_id) {
    let jobs = this.state.jobs.filter((job) => { return job.id != job_id });
    this.setState({jobs:jobs});
  }

  render() {
    const job_contents = this.state.jobs.map((job) => <Job key={job.id} job={job} skipOnPress={() => this.skipJob(job.id) }/>);
    return (
      <ScrollView style={{padding:10}}>
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
        {job_contents}
      </ScrollView>
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
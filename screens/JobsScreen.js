import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Job from '../components/Job.js';
import { jobs } from '../constants/mocks.js';

const jobsscreen = class JobsScreen extends React.Component {
  constructor() {
    super();
    console.log(jobs);
    this.state = { jobs: jobs, fullJobs: jobs };
  }

  skipJob(job_id) {
    let jobs_filtered = this.state.jobs.filter((job) => { return job.id != job_id });
    this.setState({jobs:jobs_filtered});
  }

  reloadJobs() {
    let jobs = this.state.fullJobs;
    this.setState({jobs:jobs});
  }

  render() {
    const job_contents = this.state.jobs.map((job) => <Job key={job.id} job={job} skipOnPress={() => this.skipJob(job.id) }/>);
    return (
      <ScrollView style={{padding:10}}>
        {this.state.jobs.length==0 ? <Button title="Reload Jobs" onPress={() => this.reloadJobs() }/> : null }
        <TextInput 
          style={styles.inputText}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
        />
        <View style={{ marginTop:10, marginBottom:10 }}>
          <Text style={{ fontSize: 20 }}>{this.state.jobs.length} jobs of {this.state.fullJobs.length}</Text>
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
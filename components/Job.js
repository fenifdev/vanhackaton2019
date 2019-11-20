import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Badge from '../components/Badge.js';
import Skill from '../components/Skill.js';
import ButtonPrimary from '../components/ButtonPrimary.js';

const Job = ({ job }) => {
	return (
		<View style={styles.job}>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{flex:1, fontSize:20}}>{ job.title }</Text>
				<Badge text="NEW" textColor="white" backgroundColor="black" />
				<Text>FAV</Text>
	        </View>
	        <View>
		        <Text>{ job.location }</Text>
		        <Text>{ job.description }</Text>
		        <View style={{ flexDirection: 'row', marginTop:10, marginBottom: 10, flexWrap: 'wrap'}}>
			        <Skill title="PHP" textColor="red" />
			        <Skill title="JAVASCRIPT" textColor="blue" />
			        <Skill title="LARAVEL" textColor="grey" />
			        <Skill title="MSQL" textColor="green" />
			        <Skill title="LARAVEL" textColor="grey" />
			        <Skill title="MSQL" textColor="green" />
		        </View>
		        <View style={{ marginTop:10, marginBottom: 10}}>
		        	<Button title="Skip"></Button>
		        </View>
		        <ButtonPrimary text="Apply" />
	        </View>
		</View>
	)
}

const styles = StyleSheet.create({
	job: {
		borderColor: '#CCC',
		borderWidth: 1,
		padding: 10,
		marginBottom: 20
	}
});

export default Job;
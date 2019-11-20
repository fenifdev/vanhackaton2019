import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Badge from '../components/Badge.js';
import Skill from '../components/Skill.js';
import ButtonPrimary from '../components/ButtonPrimary.js';
import ButtonPrimaryInverse from '../components/ButtonPrimaryInverse.js';
import { Ionicons } from '@expo/vector-icons';

const Job = ({ job, skipOnPress }) => {
	return (
		<View style={styles.job}>
			<View style={{ flexDirection: 'row' }}>
				<View style={{flex:1, flexDirection: 'row'}}>
					<Text style={{fontSize:20, paddingRight:5}}>{ job.title }</Text>
					<Badge text="NEW" textColor="white" backgroundColor="#0fca9f" />
				</View>
				<Ionicons name="md-star-outline" size={30} color="#7e7e7e" />
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
		        	<ButtonPrimaryInverse text="Skip" onPress={skipOnPress}/>
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
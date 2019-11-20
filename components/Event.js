import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Event = ({event}) => {
	return (
		<View style={styles.event}>
	      <View style={styles.heroImageContainer}>
	        <Image source={require('../assets/images/event-hero.png')} style={styles.heroImage}/>
	        <Image source={event.countryImage} style={styles.countryImage}/>
	      </View>
	      <View style={styles.eventContainer}>
	        <Text style={styles.title}>{event.title}</Text>
	        <Text style={styles.text}>{event.date}</Text>
	        <Text style={styles.text}>{event.location}</Text>
	        <View style={{flexDirection:'row'}}>
	        	<Text>Deadline:</Text><Text style={styles.text}>{event.deadline}</Text>
	        </View>
	      </View>
	    </View>
	)
}

const styles = StyleSheet.create({
	event: {
		marginBottom: 20,
	},
	heroImageContainer: {
		height: 150
	},
	heroImage: {
		width: '100%', 
		height: '100%'
	},
	countryImage: {
		position: 'absolute',
		right:10, 
		bottom: -15, 
		marginRight:10
	},
	eventContainer: {
		padding:10,
		borderWidth:1,
		borderColor: '#CCC',
		borderTopWidth: 0
	},
	title: {
		fontSize: 20
	},
	text: {
		color: '#757575'
	}
});

export default Event;
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Event = ({event}) => {
	return (
		<View>
	      <View style={styles.heroImageContainer}>
	        <Image source={require('../assets/images/event-hero.png')} style={styles.heroImage}/>
	        <Image source={event.countryImage} style={styles.countryImage}/>
	      </View>
	      <View style={styles.eventContainer}>
	        <Text style={styles.title}>{event.title}</Text>
	        <Text style={{color:'#ccc'}}>{event.date}</Text>
	        <Text style={{color:'#ccc'}}>{event.location}</Text>
	        <View style={{flexDirection:'row'}}>
	        	<Text>Deadline:</Text><Text style={{color:'#ccc'}}>{event.deadline}</Text>
	        </View>
	      </View>
	    </View>
	)
}

const styles = StyleSheet.create({
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
		padding:10
	},
	title: {
		fontSize: 20
	}
});

export default Event;
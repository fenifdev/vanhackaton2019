import React from 'react';
import { View, Text, Image } from 'react-native';

const Event = ({event}) => {
	return (
		<View>
	      <View style={{height: 150}}>
	        <Image source={require('../assets/images/event-hero.png')} style={{width: '100%', height: '100%'}}/>
	        <Image source={event.countryImage} style={{position: 'absolute', right:10, bottom: -15, marginRight:10}}/>
	      </View>
	      <View style={{padding:10}}>
	        <Text>{event.title}</Text>
	        <Text>{event.date}</Text>
	        <Text>{event.location}</Text>
	        <Text>{event.deadline}</Text>
	      </View>
	    </View>
	)
}

export default Event;
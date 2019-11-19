import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import { events } from '../constants/mocks.js';

export default function EventsScreen() {
  const events_content = events.map((event) => { return <View key={event.id}>
      <View style={{height: 150}}>
        <Image source={require('../assets/images/event-hero.png')} style={{width: '100%', height: '100%'}}/>
        <Image source={event.countryImage} style={{position: 'absolute', right:10, bottom: -15, marginRight:10}}/>
      </View>
        <Text>{event.title}</Text>
        <Text>{event.date}</Text>
        <Text>{event.location}</Text>
        <Text>{event.deadline}</Text>
    </View> });

  return (
    <ScrollView style={{padding:0}}>
      <Image source={require('../assets/images/event-hero.png')} style={{width: '100%', height: 300}}/>
      <View style={{borderColor:'#CCC', borderWidth:1}}>
        <View style={{padding:10}}>
          <View style={{flexDirection:'row'}}>
            <Image source={events[0].countryImage} style={{marginRight:10}}/>
            <View>
              <Text>{events[0].title}</Text>
              <Text>{events[0].location}</Text>
            </View>
          </View>
          <Text>{events[0].date}</Text>
          <Text>Deadline: {events[0].deadline}</Text>
          <Button title="See Application"></Button>
        </View>
      </View>
      <View style={{padding:10}}>
        <Text style={{fontSize:20}}>Next Events</Text>

        {events_content}
        
      </View>
    </ScrollView>
  );
}
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import { events } from '../constants/mocks.js';
import Event from '../components/Event.js';
import ButtonPrimary from '../components/ButtonPrimary.js';

export default function EventsScreen() {
  const events_content = events.map((event) => <Event key={event.id} event={event}/> );

  return (
    <ScrollView style={{padding:0}}>
      <Image source={require('../assets/images/event-hero.png')} style={{width: '100%', height: 300}}/>
      <View style={{borderColor:'#CCC', borderWidth:1}}>
        <View style={{padding:10}}>
          <View style={{flexDirection:'row'}}>
            <Image source={events[0].countryImage} style={{marginRight:10}}/>
            <View>
              <Text style={{fontSize:17}}>{events[0].title}</Text>
              <Text>{events[0].location}</Text>
            </View>
          </View>
          <Text>{events[0].date}</Text>
          <Text>Deadline: {events[0].deadline}</Text>
          <View style={{marginTop:10}}>
            <ButtonPrimary text="See Application"/>
          </View>
        </View>
      </View>
      <View style={{padding:10}}>
        <Text style={{fontSize:20,marginBottom:20}}>Next Events</Text>

        {events_content}
        
      </View>
    </ScrollView>
  );
}
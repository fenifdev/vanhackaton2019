import React from 'react';
import { View, TouchableNativeFeedback, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const header = (props) => {
	return (<View style={{flexDirection:'row', paddingLeft:10}}>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#010101')}
            onPress={() => props.navigation.openDrawer()}
        >
          <Ionicons name="md-menu" size={30} color="#46c1f1" />
        </TouchableNativeFeedback>
        <Image style={{marginLeft:10}} source={require('../assets/images/logo.png')}/>
        </View>)
}

export default header;
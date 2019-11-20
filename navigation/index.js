import React from 'react';
import { TouchableNativeFeedback, Image, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import JobsScreen from '../screens/JobsScreen';
import EventsScreen from '../screens/EventsScreen';
import CoursesScreen from '../screens/CoursesScreen';
import CourseScreen from '../screens/CourseScreen';
import LogoutScreen from '../screens/LogoutScreen';
import { Ionicons } from '@expo/vector-icons';

const JobsStackNavigator = createStackNavigator({
  Jobs: { 
  	screen: JobsScreen,
  	navigationOptions: ({navigation}) => ({
      headerLeft: (<View style={{flexDirection:'row', paddingLeft:10}}>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#010101')}
            onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="md-menu" size={30} color="#46c1f1" />
        </TouchableNativeFeedback>
        <Image style={{marginLeft:10}} source={require('../assets/images/logo.png')}/>
        </View>),
	})
  }
});

const EventsStackNavigator = createStackNavigator({
  Events: { 
  	screen: EventsScreen,
  	navigationOptions: ({navigation}) => ({
      headerLeft: (<View style={{flexDirection:'row', paddingLeft:10}}>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#010101')}
            onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="md-menu" size={30} color="#46c1f1" />
        </TouchableNativeFeedback>
        <Image style={{marginLeft:10}} source={require('../assets/images/logo.png')}/>
        </View>),
	})
  }
});

const CoursesStackNavigator = createStackNavigator({
  Courses: { 
  	screen: CoursesScreen,
  	navigationOptions: ({navigation}) => ({
      headerLeft: (<View style={{flexDirection:'row', paddingLeft:10}}>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#010101')}
            onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="md-menu" size={30} color="#46c1f1" />
        </TouchableNativeFeedback>
        <Image style={{marginLeft:10}} source={require('../assets/images/logo.png')}/>
        </View>),
	})
  },
  Course: {
  	screen: CourseScreen
  }
});

const MyDrawerNavigator = createDrawerNavigator({ Jobs: JobsStackNavigator, Events: EventsStackNavigator, Courses: CoursesStackNavigator, Logout: LogoutScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen, Register: RegisterScreen });

const Navigator = createSwitchNavigator(
	{
      App: MyDrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
);

export default createAppContainer(Navigator);
import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import JobsScreen from '../screens/JobsScreen';
import EventsScreen from '../screens/EventsScreen';
import CoursesScreen from '../screens/CoursesScreen';
import CourseScreen from '../screens/CourseScreen';

const JobsStackNavigator = createStackNavigator({
  Jobs: { 
  	screen: JobsScreen,
  	navigationOptions: ({navigation}) => ({
      headerLeft: (<Image style={{marginLeft:10}} source={require('../assets/images/logo.png')}/>),
	})
  }
});

const EventsStackNavigator = createStackNavigator({
  Events: { 
  	screen: EventsScreen,
  	navigationOptions: ({navigation}) => ({
      headerLeft: (<Image style={{marginLeft:10}} source={require('../assets/images/logo.png')}/>),
	})
  }
});

const CoursesStackNavigator = createStackNavigator({
  Courses: { 
  	screen: CoursesScreen,
  	navigationOptions: ({navigation}) => ({
      headerLeft: (<Image style={{marginLeft:10}} source={require('../assets/images/logo.png')}/>),
	})
  },
  Course: {
  	screen: CourseScreen
  }
});


const MyDrawerNavigator = createDrawerNavigator({ Jobs: JobsStackNavigator, Events: EventsStackNavigator, Courses: CoursesStackNavigator });
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
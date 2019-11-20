import React from 'react';
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
import Header from '../components/Header.js';
import CustomDrawerMenu from '../components/CustomDrawerMenu.js';

const JobsStackNavigator = createStackNavigator({
  Jobs: { 
  	screen: JobsScreen,
  	navigationOptions: ({navigation}) => ({
      headerLeft: <Header navigation={navigation} />,
	})
  }
});

const EventsStackNavigator = createStackNavigator({
  Events: { 
  	screen: EventsScreen,
  	navigationOptions: ({navigation}) => ({
      headerLeft: <Header navigation={navigation} />,
	})
  }
});

const CoursesStackNavigator = createStackNavigator({
  Courses: { 
  	screen: CoursesScreen,
  	navigationOptions: ({navigation}) => ({
      headerLeft: <Header navigation={navigation} />,
	})
  },
  Course: {
  	screen: CourseScreen
  }
});

const MyDrawerNavigator = createDrawerNavigator({ Jobs: JobsStackNavigator, Events: EventsStackNavigator, Courses: CoursesStackNavigator, Logout: LogoutScreen }, {contentComponent: CustomDrawerMenu});
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